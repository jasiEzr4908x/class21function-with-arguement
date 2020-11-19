var fixedRect, movingRect;
var gameobject1,gameobject2
function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1=createSprite(100,100,100,100)
  gameobject1.shapeColor="white"
  gameobject2=createSprite(100,700,100,100)
  gameobject2.shapeColor="white"

 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;

  gameobject1.velocityY=3
  gameobject2.velocityY=-3
}

function draw() {
  background(0,0,0);  

  bounceoff(gameobject1,gameobject2)
  
  drawSprites();
}
function bounceoff(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }



}