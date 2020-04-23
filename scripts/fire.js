class Fire{
    constructor(){
        this.r = 100;
        this.x = width;
        this.y = height - this.r
    }
    move(){
        this.x -= 7
    }
    show(){
        image(fImg, this.x, this.y, this.r, this.r)
        fill(255,50)
        rect(this.x,this.y,this.r, this.r)
    }
}