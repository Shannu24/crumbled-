
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(200,200,30)
	ground1=new Ground(400,400,800,10);

	dustbin3 = new Bin(635,385,120,15);
	dustbin1 = new Bin(570,353,15,80);
	dustbin2 = new Bin(700,353,15,80);
	
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
	paper1.display();
	ground1.display();
	dustbin3.display();
	dustbin1.display();
	dustbin2.display();
  
 drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-85});
}

}


