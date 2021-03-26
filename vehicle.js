function Vehicle (x, y) {
	this.pos = createVector(random(width), random(height));
	this.target = createVector(x, y);
	this.vel = p5.Vector.random2D();
	this.acc = createVector();
	this.r = 8;
	this.maxspeed = 5;
	this.maxforce = 0.3;
	
}

Vehicle.prototype.behaviors = function () {
	var arrive = this.arrive (this.target);
	this.applyForce(arrive); 

}

Vehicle.prototype.applyForce = function(f) {
	this.acc.add(f); 
}

Vehicle.prototype.update = function() {
	this.pos.add(this.vel); // basic physics idea of velocity
	this.vel.add(this.acc); // vel changing position
	this.acc.mult(0);
}

Vehicle.prototype.show = function(){
	stroke(0,0,128);
    strokeWeight(7);
    point(this.pos.x, this.pos.y);
}

Vehicle.prototype.arrive = function(target){
	var desired = p5.Vector.sub(target, this.pos); // from position to target, subtract the target
	var d = desired.mag();
	var speed = this.maxspeed;
	if(d<100){
		 speed = map (d, 0, 100, 0, this.maxspeed);
	}
	desired.setMag(speed);
	var steer = p5.Vector.sub(desired, this.vel);
	steer.limit(this.maxforce);
	return steer; // calculate the force and return it


}

Vehicle.prototype.seek = function(target){
	var desired = p5.Vector.sub(target, this.pos); // from position to target, subtract the target
	desired.setMag(this.maxspeed);
	var steer = p5.Vector.sub(desired, this.vel);
	steer.limit(this.maxforce);
	return steer; // calculate the force and return it


} // needs seek so that it the points' actions knows what to look for
// arrive behaviour is going to the target at a desired rate 
// when it's far, it goes fast, but its close, it slows down