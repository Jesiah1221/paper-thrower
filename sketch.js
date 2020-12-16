 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var Ground
var holder1
var holder2
var holder3
var bin, binImg

function preload()
{
  binImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,40)
	paper1.shapeColor = "purple";

	Ground = createSprite(400,600,800,10);
	Ground.shapeColor = "grey";

	holder1 = createSprite(700,590,80,10);
	holder1.shapeColor = "white";

	holder2 = createSprite(660,540,10,80);
	holder2.shapeColor = "white";

	holder3 = createSprite(740,540,10,80);
	holder3.shapeColor = "white";

	bin = createSprite(700,530,10,10);
	bin.addImage(binImg);
	bin.scale = 0.4;



	//Create the Bodies Here.
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();



  
  drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85 });

	}

}

