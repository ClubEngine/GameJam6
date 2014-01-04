define(
	['core/Screen', 'core/MapGraphics', 'core/SpriteCode'],
	function (Screen, MapGraphics, SpriteCode) {
		var Graphics = function (callback) {
			this.mapGraphics = null;

			screen = new Screen(callback);
			screen.printRect(0, 0, screen.width, screen.height, "rgba(255, 255, 255, 0.5)");
		}

		Graphics.prototype = {
			setLabyrinth: function (labyrinth) {
				if (this.mapGraphics) {
					this.mapGraphics.setMatrix(labyrinth);
				} else {
					this.mapGraphics = new MapGraphics(labyrinth);
				}
				this.mapGraphics.print();
				this.mapGraphics.print(0, 0, 1024);
			},

			refreshAll: function(entities) {
				screen.playersMapCxt.clearRect(0, 0, 736, 1024);

				for (var i in entities) {
					var entity = entities[i];
					var pos = entity.position;
					var spriteId = entity.spriteId;

					if (spriteId == SpriteCode.PLAYER1) {
						screen.drawPlayer(1, 32 * pos.x, 32 * pos.y, entity.direction);
					} else if (spriteId == SpriteCode.PLAYER2) {
						screen.drawPlayer(2, 32 * pos.x, 32 * pos.y, entity.direction);
					} else if (spriteId == SpriteCode.MONSTER1) {
						screen.drawMonster(1, 32*pos.x,32*pos.y, entity.direction);
					} else if (spriteId == SpriteCode.MONSTER2) {
						screen.drawMonster(2, 32*pos.x,32*pos.y, entity.direction);
					} else if (spriteId == SpriteCode.FIRE_BALL) {
						screen.drawFire(32*pos.x, 32*pos.y);
					}

				}
			}
		}

		return Graphics;
	}
);