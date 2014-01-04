define(
	['core/Case'],
	function (Case) {
		var MapGraphics = function (labyrinth) {
			this.labyrinth = labyrinth
		}

		MapGraphics.prototype = {
			print: function (origin_x, origin_y, visionScope) {
				for (y = 0; y < this.labyrinth.getHeight(); ++y ) {
					for (x = 0; x < this.labyrinth.getWidth(); ++x ) {
						var type = parseInt(this.labyrinth.get(x, y));
						if (!this.is_visible(origin_x, origin_y, visionScope, x, y) || type == Case.UNDEFINED) {
							screen.printRect(32 * x, 32 * y, 32, 32, "rgba(255,0,0,1)");
						} else if (type == Case.WALL) {
							screen.drawWall(32 * x, 32 * y);
						} else if (type == Case.GROUND) {
							screen.drawFloor(32 * x, 32 * y);
						} else if (type == Case.ARENA) {
							screen.drawArena(32 * x, 32 * y);
						}	
					}		
				}
			},

			is_visible: function (origin_x, origin_y, visionScope, x, y) {
				var diff_x = x - origin_x;
				var diff_y = y - origin_y;
				return (diff_x < visionScope && diff_y < visionScope && diff_x > -visionScope && diff_y > -visionScope);
			}
		}

		return MapGraphics;
	}
);

