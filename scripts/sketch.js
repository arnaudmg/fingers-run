// Globals variables

let hasStarted = false
let character
let characterImg
let fire = []
let bird = []
let characterType = localStorage.getItem("character") ? localStorage.getItem("character") : "coco" 
let specialCheat = false


// PRELOADING IMAGES, USING PATH, ALLOWING US TO CREATE NEW CHARACTERS AGAIN AND AGAIN.
// FEEL FREE TO CREATE, ONES, AND THEN SEND US A PR ! (take care about images files's name)


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


// SETUP


function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new Character(uImg);
}

// Adapt full screen width
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//Put jump and dodge images when keypress
function keyPressed(){
  if(!hasStarted) return
  if(key == ' '){
    character.jump();
    character.setImage(jImg)
  }
  if (keyCode === SHIFT) {
    specialCheat = true
    character.setImage(hImg)
  }
}

function keyReleased(){
  specialCheat = false
}


// DRAW


function draw() {
    background(bgImg)

    if(!hasStarted) return // if game hasn't started, we don't play game. Logic.

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
        //   fire.splice(fIndex,1) <-- I was trying things, implement score while object is out of the width.
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
      // }   <-- I was trying things, implement score while object is out of the width.
  }
    character.show();
    character.move();
    

// ANIMATION AND RESET IMAGE AFTER CHARACTER JUMP


    const invertedYpos = character.y - height + character.imageHeight/2 // = 0 when we are hitting floor
    if(invertedYpos == 0 && character.texture == jImg){
      console.log("change")
      character.setImage(uImg)
    }
    //Making frames, image succession.
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