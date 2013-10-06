// Actor
// Moveable object

var Actor = function () {
	this.pos = new Vector(0,0);
}

Actor.prototype = {
	getPosition: function () {
		return this.pos;
	},

	setPosition: function (x,y) {
		this.pos.x = x;
		this.pos.y = y;
	},

	getSpriteId: function () {
		return 1;
	}
}
