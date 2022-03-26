
var track;

var trackImg;

var runnerImg;

var boy;

function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  runnerImg = loadImage("Runner-1.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  track = createSprite(200,200);
  track.velocityY = 4;
  track.addImage(trackImg);

  boy = createSprite(200,200);
  boy.addImage(runnerImg);
  boy.scale=0.1;

  rightBound = createSprite(375,200,50,400);
  leftBound = createSprite(25,200,50,400);

  rightBound.visible = false;
  leftBound.visible = false;
}

function draw() {
  
  background(0);

  boy.x = World.mouseX;
  boy.collide(rightBound);
  boy.collide(leftBound);

 if(track.y > 400){

    track.y = height/2;
  }

  

  
drawSprites();

}