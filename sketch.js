var bg;

var hasDocked;

var iss, issImg;

var spaceCraft, craftImg;

function preload(){

  bg = loadImage("spacebg.jpg");

  issImg = loadImage("iss.png");

  craftImg = loadImage("spacecraft1.png");

  craft2Img = loadImage("spacecraft2.png");

  craft3Img = loadImage("spacecraft3.png");

  craft4Img = loadImage("spacecraft4.png");

}

function setup(){

  createCanvas(1000, 750);

  spaceCraft = createSprite(500, 500);
  spaceCraft.addImage("craftImg", craftImg);
  spaceCraft.scale = 0.4;

  iss = createSprite(620, 300);
  iss.addImage("issImg", issImg);
  iss.scale = 1.2;

}

function draw(){

  background(bg);

  spaceCraft.addImage("craftImg", craftImg);

  drawSprites();

}

function keyPressed(){

  if (keyCode === LEFT_ARROW) {

    spaceCraft.addImage(craft3Img);

    spaceCraft.velocityX = -5;

}

}
