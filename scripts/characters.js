class Character{
    constructor(img){
      this.x = 50;
      this.scale = 1/2
      this.vy = 0;
      this.texture = img
      this.imageHeight = img.height
      this.imageWidth = img.width
      this.y = height - this.imageHeight/2;
      this.gravity = 1;
    }

    setImage(img){
      this.texture = img
      this.imageHeight = img.height
      this.imageWidth = img.width
    }
    
    jump(){
        if(this.y == height - this.imageHeight/2)
        this.vy = -105;
    }
    
    hits(fire){
      return collideRectRect(this.x,this.y,this.imageWidth * this.scale ,this.imageHeight * this.scale,fire.x,fire.y,fire.r,fire.r);
    }
    move(){
      this.y += this.vy
      this.vy += this.gravity
      this.y = constrain(this.y, 0, height - this.imageHeight/2);
    }
    
    show(){ 
      image(this.texture,this.x, this.y, this.texture.width * this.scale, this.texture.height * this.scale);
      fill(255,50)
      rect(this.x, this.y, this.imageWidth * this.scale, this.imageHeight * this.scale)
    }  
}