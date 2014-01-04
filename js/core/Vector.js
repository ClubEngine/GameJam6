define(
	function () {
		var Vector = function (x, y) {
			this.x = x;
			this.y = y;
		};

		Vector.prototype = {
			normalize: function () {
				var norm = this.norm();
				if (norm != 0) {
					this.x /= norm;
					this.y /= norm;
				}
				
				return this;
			},

			norm: function () {
				return Math.sqrt((this.x * this.x) + (this.y * this.y));
			}
		};

		return Vector;
	}
)