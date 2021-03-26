function Vehicle (x, y) {
	this.pos = createVector(x, y);
	this.target = createVector(x, y);
	this.vel = createVector();
	this.acc = createVector();
	this.r = 8;
	
}

Vehicle.prototype.update = function() {
	this.pos.add(this.vel); // basic physics idea of velocity
	this.vel.add(this.acc); // vel changing position
}

Vehicle.prototype.show = function(){
	stroke(0,0,128);
    strokeWeight(7);
    point(this.pos.x, this.pos.y);
}