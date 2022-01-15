var ball1, ball2, edges;


function setup() {
  createCanvas(400, 400);
  ball1 = createSprite(50, 100, 102, 120)
  ball2 = createSprite(90, 200, 120, 102)

  ball1.velocityX = -4;
  ball1.velocityY = 4;


  ball2.velocityX = 4;
  ball2.velocityY = -4;

  edges = createEdgeSprites();



}

function draw() {
  background(30);
  ball1.bounceOff(edges)
  ball2.bounceOff(edges)

  drawSprites();

}