const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myengine,myworld;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  
  myengine= Engine.create();
  myworld= myengine.world;
  ground= Bodies.rectangle(400,380,800,40,{isStatic:true});
  World.add(myworld,ground);
  console.log(ground);
  
  var option= {   
    restitution:1
  }
  ball= Bodies.circle(400,100,40,option);
  World.add(myworld,ball);

}

function draw() {
  background(0);  
  Engine.update(myengine)
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,40);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,40,40);
}