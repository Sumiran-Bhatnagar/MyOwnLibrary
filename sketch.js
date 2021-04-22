var fixedRect,movingRect;
var obg1 ,obg2, obg3, obg4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "cyan";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  obg1 = createSprite(700,200,50,80);
  obg1.shapeColor = "cyan";
  obg2 = createSprite(500,300,50,80);
  obg2.shapeColor = "cyan";
  obg3 = createSprite(300,100,50,80);
  obg3.shapeColor = "cyan";
  obg4 = createSprite(800,500,50,80);
  obg14shapeColor = "cyan"; 
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if( isTouching(movingRect,obg1)){
  movingRect.shapeColor = "cyan";
 obg1.shapeColor = "yellow";
} 
else{
  movingRect.shapeColor = "yellow";
  obg1.shapeColor = "cyan";
}

  drawSprites();
}

