PLAY = 1;
END = 0;
var gameState = PLAY;
var sword, swordImage, fruitsGroup, enemyGroup, fruit1, fruit2, fruit3, fruit4, monster, fruitSprite, monsterSprite, randomNum, gameOverImg;
var score = 0;
function preload(){
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  swordImage = loadImage("sword.png");
  monster = loadImage("alien1.png");
  gameOverImg = loadImage("gameover.png");
}
function setup(){
  createCanvas(400,400);
  sword = createSprite(40,200,20,20);
    
  sword.addImage("ururur",swordImage);
    
  sword.scale = 0.5;
    
  fruitsGroup = new Group();
    
  enemyGroup = new Group();
}

function draw(){
   
    background("lightblue");
  text("Score:"+score,350,50);
  
  if(gameState === PLAY){
  
    
  sword.x = World.mouseX;
    
  sword.y = World.mouseY;
    
    fruits();
    
    enemy();
    
  if(sword.isTouching(fruitsGroup)){
  fruitsGroup.destroyEach();
  score = score+2;
   
  }

    if(sword.isTouching(enemyGroup)){
    
    sword.addImage("GameOver",gameOverImg);
    
    gameState = END;
   
    
  }
      
  
    
  
  }
  else if(gameState === END){
    score = 0;
    fruitsGroup.destroyEach();
    
    enemyGroup.destroyEach();
    
   
    
    sword.x = 200;
    
    sword.y = 200;
    
    fruitsGroup.setVelocityXEach(0);
    
    enemyGroup.setVelocityXEach(0);
    
    fruitsGroup.setLifetimeEach(-1);
    
    fruitsGroup.setLifetimeEach(-1);
    
   
}

drawSprites();

}
function fruits(){
  if(frameCount % 80 === 0){
    fruitSprite = createSprite(400,200,20,20);
    fruitSprite.scale = 0.2;
    randomNum = round(random(1,4));
    if(randomNum == 1){
      fruitSprite.addImage(fruit1)
    }else if (randomNum == 2){
      fruitSprite.addImage(fruit2)
    }else if (randomNum == 3){
      fruitSprite.addImage(fruit3)
    }else if(randomNum == 4){
      fruitSprite.addImage(fruit4);
    }
    fruitSprite.y = round(random(50,340));
    fruitSprite.velocityX = -7;
    fruitSprite.setLifetime = 100;
    fruitsGroup.add(fruitSprite);
  }
}
function enemy(){
  if(frameCount % 100 === 0){
    monsterSprite = createSprite(400,200,20,20);
    monsterSprite.addImage("kykykyk",monster);
    monsterSprite.y = round(random(100,340));
    monsterSprite.velocityX = -8;
    monsterSprite.setLifetime = 100;
    enemyGroup.add(monsterSprite);
  }
}