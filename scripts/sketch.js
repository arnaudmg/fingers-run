let character
let characterImg
let fire = []
let characterType = localStorage.getItem("character") ? localStorage.getItem("character") : "coco" 
let specialCheat = false
function preload(){
    uImg = loadImage(`./images/${characterType}/middle.png`);
    bgImg = loadImage(`./images/map-nuit.jpg`)
    fImg = loadImage(`./images/fire.png`)
    jImg = loadImage(`./images/${characterType}/jump.png`)
    leftImg = loadImage(`./images/${characterType}/left.png`)
    rightImg = loadImage(`./images/${characterType}/right.png`)
    hImg = loadImage(`./images/${characterType}/dodge.png`)
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new Character(uImg);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(key == ' '){
    character.jump();
    character.texture = jImg
  }
  if (keyCode === CONTROL) {
    specialCheat = true
    character.texture = hImg
  }
}

function keyReleased(){
  specialCheat = false
}

function draw() {
    if(random(1) < 0.12){
        fire.push(new Fire())
    }

    background(bgImg);
    for (let f of fire){
        f.move()
        f.show()

        if(character.hits(f)){
          isPlaying = false
          time = 0
          console.log('game');
          noLoop();
        }
    }
    character.show();
    character.move();
    
    const invertedYpos = character.y - height + character.r // = 0 quand on touche le sol
    if(invertedYpos == 0 && character.texture == jImg){
      console.log("change")
      character.texture = uImg
    }
    if(character.texture != jImg && !specialCheat){
      if(frameCount % 80 == 20){
        character.texture = leftImg
      }else if((frameCount % 40) == 0){
        character.texture = uImg
      }
      else if((frameCount % 60) == 0){
        character.texture = rightImg
      }
    }
}