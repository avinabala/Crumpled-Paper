class Paper{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
           }
           this.x=x
           this.y=y
           this.r=r
           this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
           this.image=loadImage("paper.png");
           World.add(world,this.body);
              
    }

    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        strokeWeight(4)
        imageMode(RADIUS);
        image(this.image,0,0,this.radius*0.5,this.radius*0.5);
        pop();
    }
   
}