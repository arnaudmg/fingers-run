class Bird{
    constructor(){
        this.r = 100;
        this.x = width;
        this.y = height/1.3 - this.r;
    }
    move(){
        this.x -= 5
    }
    show(){
        image(bImg, this.x, this.y, this.r, this.r)
        fill(255,50)
        rect(this.x,this.y,this.r, this.r)
    }
}