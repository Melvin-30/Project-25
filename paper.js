class paper{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r;
        this.image=loadImage("images/paper.png")
        World.add(world,this.body);
        
    }
    display(){
        var angle=this.body;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white")
        image(this.image, 0, 0, 80,80);
        pop()
    }
}