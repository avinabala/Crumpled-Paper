
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject
var paperObject;
var world;


function setup() {
	createCanvas(1400, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  paperObject = new Paper(100,450,60)
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(1200,450);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paperObject.display();
  dustbinObj.display();
  groundObject.display();

}


function keyPressed() { 
if (keyCode === UP_ARROW) { 
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:91,y:-94}); 
}
}