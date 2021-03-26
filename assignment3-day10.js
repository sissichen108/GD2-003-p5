

function setup() {
  createCanvas(1000, 1000);
  
}



function draw() {
  //top left group
  rect(200,200,10,350)
  rect(210,200,10,350)
  rect(220,200,10,350)
  rect(230,200,10,350)
  rect(240,200,10,350)
  
// top right group 
  rect(450,200,25,100)
  rect(475,200,25,100)

// top and bottom bars
  rect(200,200,250,25)
  rect(200,300,300,25)


  //far right rectangle group
  rect(500,300,25,200)
  rect(525,300,25,200)
  

  rect(200,500,300,75)

//bottom bars
  strokeWeight(1)
  stroke(255)
  fill(0)
  
}

//function mousePressed() {
  //noFill();
  //stroke(1);
  //ellipse(mouseX, mouseY, clicked, clicked);
  //clicked++;

//}
  
