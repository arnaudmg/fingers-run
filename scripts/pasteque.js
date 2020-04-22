class Pasteque{
    constructor(img){
      this.r = 260;
      this.x = 50;
      this.ratio = 1/10
      this.y = height - this.r;
      this.vy = 0;
      this.texture = img
      this.gravity = 0.3;
    }
    
    jump(){
        if(this.y == height - this.r)
        this.vy = -35;
    }
    
    hits(fire){
      return collideRectRect(this.x,this.y,this.r,this.r,fire.x,fire.y,fire.r,fire.r);
    }
    move(){
      this.y += this.vy
      this.vy += this.gravity
      this.y = constrain(this.y, 0, height - this.r);
    }
    
    show(){ 
      image(this.texture,this.x, this.y, this.texture.height * this.ratio, this.texture.height * this.ratio);
      fill(255,50)
      rect(this.x,this.y,this.r, this.r)
    }  
}