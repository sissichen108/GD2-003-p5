let bigB;

function preload() {
	bigB = loadImage('b2.png') 
}


function setup() { 
  createCanvas (1000,1000);
  background(255);
  //image(bigB, 0, 0);
  
unitSize = 10;
for (i=0; i<height; i=i+unitSize) {
	for (j=0; j<width; j=j+unitSize) {

		pixelColor = bigB.get(j, i);

		if (pixelColor == [255,0, 255,255]) {
			fill(pixelColor);
			randomSize = random(5,15);
			circle(j,i,randomSize, randomSize);
		} else {

		}
		


		
		noStroke();

		
	} 
	
}

}

function draw() {

}