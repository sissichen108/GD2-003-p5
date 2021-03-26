function setup() { 
  createCanvas(1000,1000);
  background(0);
  fill(255);
  
		
} 

function draw() {
	triangle(1000, 300, 600, 400, 1000, 700); // right triangle
	triangle(200, 250, 200, 0, 300, 0); // top left triangle
	triangle(500, 250, 700, 70, 600, 250); // top right triangle
	 triangle(200, 600, 200, 1000, 300, 1000); // bottom left triangle
	triangle(500, 600, 800, 900, 600, 850); // bottom right triangle

}