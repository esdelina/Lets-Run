var path, pathimg;
var boy, boyimg;
var leftboundary,rightboundary;

function preload(){
pathimg= loadImage("path.png")
boyimg= loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path= createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY= 4;
  path.scale= 1.2;

  boy= createSprite(180,340,30,30);
  boy.addAnimation("boy1",boyimg);
  boy.scale=0.08;
  
  leftboundary= createSprite(0,0,100,800);
  leftboundary.visible= false;

  rightboundary= createSprite(410,0,100,800);
  rightboundary.visible= false;



}

function draw() {
  background(0);

  edges= createEdgeSprites();

  boy.collide(leftboundary);
  boy.collide(rightboundary);

boy.x = World.mouseX;


if(path.y >400){
  path.y=height/2
}
  drawSprites();
}
