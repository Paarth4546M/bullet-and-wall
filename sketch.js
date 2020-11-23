var bullet,wall,thickness; 
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  
  speed = random(223,321);
  weight = random(30,52);
thickness = random(22,83);

bullet  = createSprite(50,200,50,30);

bullet.shapeColor = "white"
bullet.velocityX = speed;

wall = createSprite(1000,200,thickness,height/2);
wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  
 

if(wall.position.x - bullet.position.x < bullet.width/2 + wall.width/2){

 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
 bullet.velocityX = 0;
if(damage>10){
  wall.shapeColor = color(255,0,0)
}
if(damage<10){
  wall.shapeColor = color(0,255,0)
}

}
drawSprites();
} 