

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  for(i=0;i<255;i++){
    fill(i+180, 150, 150)
    ellipse(width/2-i*3-150,height/2-265,200,200)
    ellipse(width/2-i*3-50,height/2+110,500,500)
  }
  
}



function draw() {
  }

  //referencing Ali's code from class

//function mousePressed() {
  //noFill();
  //stroke(1);
  //ellipse(mouseX, mouseY, clicked, clicked);
  //clicked++;

//}
  
