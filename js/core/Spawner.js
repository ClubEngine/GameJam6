var Spawner = function (lab) {
	this.lab = lab;

	this._findSpawns();
}

Spawner.prototype = {
	_findSpawns: function () {
		this.spawns = [];
		for(var x = 0; x < this.lab.width; ++x) {
			for(var y = 0; y < this.lab.height; ++y) {
				if(!this.lab.isObstacle(x, y)) {
					this.spawns.push([x, y]);
				}
			}
		}
	},

	randomSpawn: function () {
		var randomID = Math.random() * this.spawns.length % this.spawns.length;
		return this.spawns.splice(randomID, 1)[0];
	}
}