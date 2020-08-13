
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1200, 500);

	side1=createSprite(890,400,20,200);
	side1.shapeColor = "Red"
	side2=createSprite(1110,400,20,200);
	side2.shapeColor = "Red"
	bottom=createSprite(1000,445,200,20);
	bottom.shapeColor = "Red"

	side1 = Bodies.rectangle(890,400,20,200, {isStatic: true, friction: 1.0});
	side2 = Bodies.rectangle(1110,400,20,200, {isStatic: true, friction: 1.0});
	bottom = Bodies.rectangle(1000,445,200,20);
	
	ground=createSprite(600,465,1200,20)
	ground.shapeColor = "white"

	ground = Bodies.rectangle(600,465,1200,20, {isStatic: true})
	World.add(world, ground)
	World.add(world, side1)
	World.add(world, side2)
	World.add(world, bottom)
	



	//Create the Bodies Here.
	paper = new Paper(100,20,30)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)

  rect(ground.position.x, ground.position.y, 1200, 20)


  drawSprites();
  paper.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y: -85});
	}
}



