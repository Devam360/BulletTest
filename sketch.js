var bullet, wall;

var speed, weight, dam;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  
  thickness = random(22, 83);

  bullet=createSprite(50, 200, 100, 10);
  bullet.velocityX = speed
  bullet.shapeColor = color(0);


  wall = createSprite(1300, 200, thickness, height/2)

  
  dam = (0.5*weight*speed*speed)/thickness*thickness*thickness

}

function draw() {
  background(255,255,255);
  if(bullet.x < wall.x + wall.width &&
    bullet.x + bullet.width > wall.x &&
    bullet.y < wall.y + wall.height &&
    bullet.y + bullet.height > wall.y){
      bullet.velocityX = 0
      if(dam<10){
        wall.shapeColor="green"
      }
      else{
        wall.shapeColor = "red"
      }
    }
  drawSprites();
}