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
var botao;
var bg_img;
var food;
var rabbit;
var sprit;
function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  botao=createImg("cut_btn.png");
  botao.position(200,30);
  botao.size(50,50);
  botao.mouseClicked(fruta);
  sprit = createSprite(250,650,100,100);
  sprit.addImage(rabbit);
  sprit.scale=0.2;
  ground = new Ground(200,690,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);
  if(fruit != null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  rope.show();
  Engine.update(engine);
  ground.show();

 
  drawSprites();
}
function fruta (){
rope.break();
fruit_con.detach();
fruit_con=null;
}