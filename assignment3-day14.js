let bigB;

function preload() {
	bigB = loadImage('b.png') 
}


function setup() { 
  createCanvas (1000,1000);
  background(255);
  image(bigB, 0, 0);
  
for (i=0; i<height; i=i+50) {
	for (j=0; j<width; j=j+50) {

		pixelColor = bigB.get(j, i);
		fill(pixelColor);
		randomSize = random(20,80);
		ellipse(j,i,randomSize, randomSize);
		//ellipse(j,i,30, 30); uniform

		
	} 
	
}

}
function draw() {

}