var fix, moving;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50);
  fix.shapeColor = 'red';

  moving = createSprite(600, 200, 50, 50);
  moving.shapeColor = 'blue';
}

function draw() {
  background(255,255,255); 

  moving.x = mouseX;
  moving.y = mouseY;

  if(moving.x - fix.x <= moving.width / 2 + fix.width / 2 && 
     fix.x - moving.x <= moving.width / 2 + fix.width / 2 &&
     moving.y - fix.y <= moving.height / 2 + fix.height / 2 &&
     fix.y - moving.y <= moving.height / 2 + fix.height / 2){
     
     moving.shapeColor = 'red';
     fix.shapeColor = 'blue';
  }
  
  else{
    moving.shapeColor = 'blue';
    fix.shapeColor = 'red';
  }

  drawSprites();
}