let hasStarted = false
let character
let characterImg
let fire = []
let bird = []
let characterType = localStorage.getItem("character") ? localStorage.getItem("character") : "coco" 
let specialCheat = false
function preload(){
  uImg = loadImage(`./images/${characterType}/middle.png`);
  bgImg = loadImage(`./images/map-nuit.jpg`)
  fImg = loadImage(`./images/rocher.png`)
  jImg = loadImage(`./images/${characterType}/jump.png`)
  leftImg = loadImage(`./images/${characterType}/left.png`)
  rightImg = loadImage(`./images/${characterType}/right.png`)
  hImg = loadImage(`./images/${characterType}/dodge.png`)
  bImg = loadImage(`./images/bird.png`)
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new Character(uImg);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(!hasStarted) return
  if(key == ' '){
    character.jump();
    character.setImage(jImg)
  }
  if (keyCode === CONTROL) {
    specialCheat = true
    character.setImage(hImg)
  }
}

function keyReleased(){
  specialCheat = false
}

function draw() {
    background(bgImg)

    if(!hasStarted) return // if game hasn't started, we don't play game logic

    if(random(1) < 0.003){
      fire.push(new Fire())
    }
    if(random(1) < 0.001){
      bird.push(new Bird())
    }
    let fIndex = 0
    for (let f of fire){
        f.move()
        f.show()
        fIndex++

        if(character.hits(f)){
          isPlaying = false
          time = 0
          console.log('game');
          noLoop();
        }
        // if(f.x < 0){
        //   score++;
        //   fire.splice(fIndex,1)
        // }
    }
    let bIndex = 0
    for (let b of bird){
      b.move()
      b.show()
      bIndex++
      if(character.hits(b)){
        isPlaying = false
        time = 0
        console.log('game');
        noLoop();
      }
      // if(b.x < 0){
      //   score++;
      //   bird.splice(bIndex,1)
      // }   
  }
    character.show();
    character.move();
    
    const invertedYpos = character.y - height + character.imageHeight/2 // = 0 quand on touche le sol
    if(invertedYpos == 0 && character.texture == jImg){
      console.log("change")
      character.setImage(uImg)
    }
    if(character.texture != jImg && !specialCheat){
      if(frameCount % 80 == 20){
        character.setImage(leftImg)
      }else if((frameCount % 40) == 0){
        character.setImage(uImg)
      }
      else if((frameCount % 60) == 0){
        character.setImage(rightImg)
      }
    }
}