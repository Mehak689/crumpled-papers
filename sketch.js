//creates constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creates variables
var dustbin1, dustbin2, dustbin3, dustbin4, dustbin4Img, paper, ground;

function preload() {
	//loads images
	dustbin4Img = loadImage("dustbingreen.png");
}

function setup() {
	//creates a canvas
	createCanvas(1350, 625);

	//creates a engine and calls the world
	engine = Engine.create();
	world = engine.world;

	//creates objects
	dustbin4 = createSprite(1225, height - 70);
	dustbin4.addImage(dustbin4Img);
	dustbin4.scale = 0.35;

	//makes objects from blueprints
	paper = new Paper(50, height - 25, 10);
	dustbin1 = new Dustbin(1200, height - 62, 15, 100);
	dustbin2 = new Dustbin(1230, height - 20, 10, 15);
	dustbin3 = new Dustbin(1250, height - 62, 15, 100);
	ground = new Ground(width / 2, height - 7, 1350, 15);

	//runs the engine
	Engine.run(engine);
}

function draw() {
	//creates a background
	background(225);

	Engine.update(engine);

	//displays the objects
	paper.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	dustbin4.display();

	//draws all the sprites
	drawSprites();
}

function keyPressed() {
	//bounces the paper
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 23, y: -23 });
	}
}
