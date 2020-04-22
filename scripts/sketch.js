let pasteque
let pastequeImg
let fire = []
function preload(){
    uImg = loadImage('./images/watermelon-2.png');
    bgImg = loadImage('./images/map-nuit.jpg')
    fImg = loadImage('./images/fire.png')
    jImg = loadImage('./images/jumpWatermelon.png')
    leftImg = loadImage('./images/runLeftWatermelon.png')
    rightImg = loadImage('./images/runRightWatermelon.png')
    hImg = loadImage('./images/dodgePasteque.png')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  pasteque = new Pasteque(uImg);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(key == ' '){
    pasteque.jump();
    pasteque.texture = jImg
  }
  // if (keyCode === CONTROL) {
  //   pasteque.texture = hImg
  // }
}

function draw() {
    if(random(1) < 0.0019){
        fire.push(new Fire())
    }

    background(bgImg);
    for (let f of fire){
        f.move()
        f.show()

        if(pasteque.hits(f)){
          console.log('game');
          noLoop();
        }
    }
    pasteque.show();
    pasteque.move();
    
    const invertedYpos = pasteque.y - height + pasteque.r // = 0 quand on touche le sol
    if(invertedYpos == 0 && pasteque.texture == jImg){
      console.log("change")
      pasteque.texture = uImg
    }
    if(pasteque.texture != jImg){
    if(frameCount % 80 == 40){
      pasteque.texture = leftImg
    }else if((frameCount % 80) == 0){
      pasteque.texture = rightImg
    }
    }
}