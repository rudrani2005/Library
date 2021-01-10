function bounceOff(object3,object4){

    if (object3.x - object4.x < object4.width/2 + object3.width/2
      && object4.x - object3.x < object4.width/2 + object3.width/2) {
        object3.velocityX = object3.velocityX * (-1);
        object4.velocityX = object4.velocityX * (-1);
    }
    if (object3.y - object4.y < object4.height/2 + object3.height/2
    && object4.y - object3.y < object4.height/2 + object3.height/2){
      object3.velocityY = object3.velocityY * (-1);
      object4.velocityY = object4.velocityY * (-1);
    }
    
  }