var movrect, fixrect;
var r1,r2,r3,r4,r5;
var ob1,ob2;
function setup() {
  createCanvas(800,400);
  movrect=createSprite(400, 200, 50, 50);
  movrect.shapeColor="red";
  fixrect=createSprite(200,200,50,50);
  fixrect.shapeColor="red";
  fixrect.velocityX=3;
  r1=createSprite(100,200,50,50);
  r1.shapeColor="red";
  r2=createSprite(500,200,50,50);
  r2.shapeColor="yellow";
  r2.velocityX=-3;
  r3=createSprite(600,200,50,50);
  r3.shapeColor="red";
  r4=createSprite(600,100,50,50);
  r4.shapeColor="red";
  r4.velocityY=5;
  r5=createSprite(600,300,50,50);
  r5.shapeColor="green";
  r5.velocityY=-5;

}
                                                                 
function draw() {
  background(120,250,4);  
  movrect.x=mouseX;
  movrect.y=mouseY;
  console.log(fixrect.y-movrect.y);
  isTouching(movrect,fixrect);
  isTouching(movrect,r1);
  isTouching(movrect,r2);
  isTouching(movrect,r3);
  isTouching(movrect,r4);
  isTouching(movrect,r5);
  bounceOff(r5,r4);
  bounceOff(r2,fixrect);
  drawSprites();
}
  