var ball;
var world;
var radius = 30;
var engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	ground = new Ground(800,50,10,10)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(500,600,20,120)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restution:0.3,
		friciton : 0,
		density:1.2
		

	
	}
	ball=Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius)
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.02}) 
	}
}



