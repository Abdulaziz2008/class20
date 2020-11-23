var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(200, 100, 50, 100);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x);
  //            75                        50          +     25
  if(movingRect.x - fixedRect.x<= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
   movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y<=fixedRect.height/2+ movingRect.height/2){
    fixedRect.shapeColor = "lightblue";
  movingRect.shapeColor = "lightblue";

  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}