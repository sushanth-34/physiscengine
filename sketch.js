const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundoption = {
    isStatic: true
  }
  var balloption = {
    restitution: 1.0
  }
  ground = Bodies.rectangle(200,390,50,50,groundoption);
  World.add(world,ground);
  ball = Bodies.circle(200,100,20,balloption);
  World.add(world,ball);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ground.position.x,ball.position.y,50,50);
}
