let bigB;

function preload() {
	bigB = loadImage('bigB2.png') 
}


function setup() { 
  createCanvas (1000,1000);
  background(255);
  //image(bigB, 0, 0);
  
for (i=0; i<height; i=i+50) {
	for (j=0; j<width; j=j+50) {

		pixelColor = bigB.get(j, i);
		fill(pixelColor);
		randomSize = random(20,80);
		rect(j,i,randomSize, randomSize);
		noStroke();

		
	} 
	
}

}
function draw() {

}