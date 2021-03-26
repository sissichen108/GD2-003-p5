//let bigB;
let bigB2;

function preload() {
	//bigB = loadImage('b4.png');
	bigB2 = loadImage('bigB2.png');
}


function setup() { 
  createCanvas(1000,1000,WEBGL);
  
  
	//image(bigB2,0,0);
	
	

	//image(bigB,100,0);


  
		
	} 

function draw() {


  background(255);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(bigB2);
  box(500, 500, 500);
}