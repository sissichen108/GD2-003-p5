let clicked = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  rect(200,200,50,500)
  fill(0)

}

function mousePressed() {
  noFill();
  stroke(1);
  ellipse(mouseX, mouseY, clicked, clicked);
  clicked=clicked+5;

}
  

  // for day 7 and 8
