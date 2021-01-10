var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}
//Collision algo
function draw() {
  background("black"); 
  
 
/*
  if(movingRect.isTouching(fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

    isTouching(spritename,target)
  }
  
  if (isTouching(movingRect,testRect)){
    movingRect.shapeColor = "red";
    testRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    testRect.shapeColor = "green";
  }

 */

bounceOff(movingRect,fixedRect)


  drawSprites();
}
//function will return the value
function isTouching(object1 , object2){
  if (object1.x - object2.x <  object1.width/2+object2.width/2 &&
    object2.x - object1.x <  object1.width/2+object2.width/2 &&
    object1.y - object2.y <  object1.height/2+object2.height/2 &&
    object2.y - object1.y <  object1.height/2+object2.height/2 ){
   
    return true;
    
  
  }
  else{
    return false;
    
  }
  
}


