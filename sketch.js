var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bobDianeter,bobObject1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(400,400,40)
	bobObject2= new Bob(440,400,40);
	bobObject3= new Bob(480,400,40);
	bobObject4 = new Bob(520,400,40);
	bobObject5= new Bob(560,400,40);
	bobDianeter=80
	
	roofObject=new Roof(480,200,200,10)

	ropeObject1= new Rope(bobObject1.body,roofObject.body,-bobDianeter*1,0)
	ropeObject2= new Rope(bobObject2.body,roofObject.body,-bobDianeter*0.5,0)
	ropeObject3= new Rope(bobObject3.body,roofObject.body,-bobDianeter*0,0)
	ropeObject4= new Rope(bobObject4.body,roofObject.body,-bobDianeter*-0.5,0)
	ropeObject5= new Rope(bobObject5.body,roofObject.body,-bobDianeter*-1,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-90,y:90})
}
}

