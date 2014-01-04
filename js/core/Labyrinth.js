define(['jquery', 'core/Case'], function ($, Case) {
	var Labyrinth = function(width, height) {
		this.width = parseInt(width);
		this.height = parseInt(height);
		this.data = new Array();
		for(var x = 0; x < width; ++x) {
			this.data[x] = new Array();	
			for(var y = 0; y < height; ++y)
				this.data[x][y] = Case.UNDEFINED;
		}
	}

	Labyrinth.prototype = {
		getWidth: function() {
			return this.width;
		},

		getHeight: function() {
			return this.height;
		},

		get: function(x, y) {
			if (x >= this.width || y >= this.height || x < 0 || y < 0) {
				return Case.UNDEFINED;
			} else {
				c = this.data[x][y];
				return (typeof(c) == 'undefined') ? Case.UNDEFINED : c;
			}
		},

		isObstacle: function(x, y) {
			var c = this.get(x,y);
			return c == Case.WALL || c == Case.UNDEFINED;
		},

		set: function(x, y, code) {
			this.data[x][y] = code;		
		}
	}

	return Labyrinth;
});
