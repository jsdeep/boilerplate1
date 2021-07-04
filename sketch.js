const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,canonbal;
var balls= [];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();  
 for(var i=0; i<balls.length;i++){
   showCanonBalls(balls[i],i);
 }
  cannon.display();
  tower.display();
  //canonbal.display();
  
  
 
}
function keyReleased(){
  if(keyCode=(DOWN_ARROW)){
    canonbal=new canonball(cannon.x,cannon.y);
canonbal.shoot();
balls.push(canonbal);
}

}
function showCanonBalls(balls,index){
  balls.display();
}
function keyReleased(){
  if(keyCode=(DOWN_ARROW)){
    balls[balls.length-1].shoot();
  }
}