define(
	['core/Action'],
	function (Action) {
		var Actor = function () {
			this.position = {
				x: 0,
				y: 0
			};
			this.spriteId = 1;
			this.direction = Action.UP;
			this.controls = null;

			// = actions / seconds
			this.speed = 60;
			this._lastActionDate = Date.now();
		}

		Actor.prototype = {
			update: function () {
				if (this.controls) {
					if (Date.now() >= this._lastActionDate + (1000 / this.speed)) {
						this._lastActionDate = Date.now();
						if (this.controls.action !== Action.IDLE) {
							if (this._tryMove(this.controls.getDirection())) {
							// @TODO: do something ?
						    }
					    } 
					}
				}
			},

			_tryMove: function (controlsDirection) {
				var speed = {
					x: 0.25,
					y: 0.25
				}

				var newPosition = {
					x: this.position.x + controlsDirection.x * speed.x,
					y: this.position.y + controlsDirection.y * speed.y
				};

				this.position = newPosition;

				// if (!this.labyrinth.isObstacle(newPosition.x, newPosition.y)) {
				// 	this.position = newPosition;
				// 	return true;
				// }

				return false;
			}
		}

		return Actor;
	}
);