var font;
var vehicles = [];

function preload(){
  font = loadFont('SpaceMono-Bold.ttf'); //need local server to load font
}

function setup() {
  createCanvas(1000, 1000);
  background(255);
  //textFont(font);
  //textSize(500);
  //fill(255);
  //strokeWeight(2);
  //stroke(5);
  //text('B', 200, 500);  

  var points = font.textToPoints('B', 200, 500, 500);
  console.log(points); //what does the function from line 15 give us

  for (var i = 0; i < points.length; i++){
    var pt = points[i]
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle); //vehicle for every points path
    //stroke(0,0,128); instead of drawing points in setup 
    //strokeWeight(7);
    //point(pt.x, pt.y);
    
    
  }
  
}



function draw() {
  background(255);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
    }

  }

  //referencing coding challenge #59 from the coding train

//function mousePressed() {
  //noFill();
  //stroke(1);
  //ellipse(mouseX, mouseY, clicked, clicked);
  //clicked++;

//}
  
