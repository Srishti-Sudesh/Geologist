
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, ground, rubber, iron;
var rock, rubber, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8;


function setup() {
	createCanvas(1500, 500);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(200,80,120,30);

	iron = new Iron(700,50,60,60);

	sand1 = new Sand (700,20);
	sand2 = new Sand(698,20);
	sand3 = new Sand(698,20);
	sand4 = new Sand(695,20);
	sand5 = new Sand(694,20);
	sand6 = new Sand(695,20);
	sand7 = new Sand(700,20);
	sand8 = new Sand(690,20);

	rubber = new Rubber(500,200);

	rock = new Stone(180,200,80,80);

	ground = new Ground(450,450,2000,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  ground.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron.display();
  rock.display();
  rubber.display();
  drawSprites();
 
}



