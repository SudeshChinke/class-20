
var a,b;

function setup() {
  createCanvas(800,400);
 a=createSprite(500,200,30,30);
 a.shapeColor="green";

 b=createSprite(200,200,50,50);
 b.shapeColor="green";

 a.velocityX=-3;

}

function draw() {
  background(255,255,255); 
  b.x=World.mouseX;
  b.y=World.mouseY;

  console.log(b.y-a.y);
  
 if(b.x-a.x < a.width/2 + b.width/2 && a.x-b.x < a.width/2 + b.width/2 && b.y-a.y < a.height/2 + b.height/2 && a.y-b.y < a.height/2 + b.height/2){

  a.shapeColor="red";
  b.shapeColor="red";
  
  a.velocityX=a.velocityX*-1;

 }else {
  a.shapeColor="green";
  b.shapeColor="green";
 }

 
  drawSprites();
}