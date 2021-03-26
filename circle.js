class Circle {
	float x;
	float y;
	float r; //radius

	Circle (float x_, float y_) {//constructor function {
		x = x_;
		y = y_;
		r = 50;
	}

	void show(){
		stroke(255);
		noFill();
		ellipse(x,y,r*2,r*2);
	}
}