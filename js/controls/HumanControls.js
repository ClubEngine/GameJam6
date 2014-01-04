define(
	['jquery', 'underscore', 'keydrown', 'core/Vector'],
	function ($, _, kd, Vector) {
		var HumanControls = function () {
			this._initPressed();
			this._initKD();
			this._direction = new Vector(0, 0);
		}

		HumanControls.prototype = {
			getDirection: function () {
				this._direction.x = 0;
				this._direction.y = 0;

				this._direction.y += (this.pressed['up']) ? -1 : 0;
				this._direction.y += (this.pressed['down']) ? 1 : 0;

				this._direction.x += (this.pressed['right']) ? 1 : 0;
				this._direction.x += (this.pressed['left']) ? -1 : 0;

				this._direction.normalize();

				return this._direction;
			},

			_initPressed: function () {
				this.pressed = {
					'up':    false,
					'right': false,
					'down':  false,
					'left':  false
				};
			},

			_initKD: function () {
				var self = this;

				kd.UP.down(function () { self.pressed['up'] = true; });
				kd.UP.up(function () { self.pressed['up'] = false; });

				kd.RIGHT.down(function () { self.pressed['right'] = true; });
				kd.RIGHT.up(function () { self.pressed['right'] = false; });
				
				kd.DOWN.down(function () { self.pressed['down'] = true; });
				kd.DOWN.up(function () { self.pressed['down'] = false; });

				kd.LEFT.down(function () { self.pressed['left'] = true; });
				kd.LEFT.up(function () { self.pressed['left'] = false; });

				$(window).blur(function () { self._initPressed(); });;
			}
		};

		return HumanControls;
	}
)