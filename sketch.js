
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.


	Engine.run(engine);


	chao_options = {
		isStatic: true
	}

	block1_options = {
		restitution: 1,
		frictionAir: 0.3
	}
  
	block2_options = {
		restitution: 1.5,
		frictionAir: 0
	}

	block3_options = {
		restitution: 0.8,
		frictionAir: 0.4
	}

	chao = Bodies.rectangle (200, 390,400, 30, chao_options)
	World.add(world, chao)

	block1 = Bodies.rectangle (200, 200, 50, 50, block1_options)
	World.add (world, block1)
	
	block2 = Bodies.circle (350, 50, 30, block2_options)
	World.add (world, block2)

	block3 = Bodies.rectangle (50, 50, 60, 40, block3_options)
	World.add(world, block3)
}


function draw() {
  rectMode(CENTER);
  background(189, 44, 145);
  
  Engine.update (engine)

  drawSprites();


  rect (chao.position.x, chao.position.y, 400, 30)
  
  fill ("green")
  rect (block1.position.x, block1.position.y, 50, 50)
  fill ("red")
  rect (block3.position.x, block3.position.y, 60, 40)
  fill ("darkblue")
  ellipse (block2.position.x, block2.position.y, 60)

  rectMode(CENTER)
  ellipseMode(CENTER)
}



