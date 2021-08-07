const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
// var melon,rabbit, back;


// function preload(){
//   back=loadImage("background.png");
//   melon=loadImage("melon.png");
//   rabbit=loadImage("Rabbit-01.png");
// }

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  



}

function draw() 
{
  background(51);
  // image(back,0,0,displayWidth+80,displayHeight);
 
  rope.show();
  // push();
  // imageMode(CENTER);
  // if(fruit!=null){
  //   image(food,fruit.position.x,fruit.position.y,70,70);
  // }
  // pop();
  Engine.update(engine);
  ground.show();

 
   
}













