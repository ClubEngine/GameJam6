define(
	[''],
	function () {
		var Screen = function(callback) {
			this.map = document.getElementById('map');
			this.context = this.map.getContext('2d');

			this.playersMap = document.getElementById('playersMap');
			this.playersMapCxt = this.playersMap.getContext('2d');

			this.width = this.map.width;
			this.height = this.map.height;

			var nbSpritesLoading = 0, nbSpritesLoaded = 0;

			var spritesImg = {
		        // Players
		        'player13': 'assets/amg1_bk1.png',
		        'player14': 'assets/amg1_fr1.png',
		        'player12': 'assets/amg1_lf1.png',
		        'player11': 'assets/amg1_rt1.png',
		        'player23': 'assets/npc5_bk1.png',
		        'player24': 'assets/npc5_fr1.png',
		        'player22': 'assets/npc5_lf1.png',
		        'player21': 'assets/npc5_rt1.png',

		        // Monsters
		        'monster13': 'assets/scr1_bk1.png',
		        'monster14': 'assets/scr1_fr1.png',
		        'monster12': 'assets/scr1_lf1.png',
		        'monster11': 'assets/scr1_rt1.png',
		        'monster23': 'assets/wmg1_bk1.png',
		        'monster24': 'assets/wmg1_fr1.png',
		        'monster22': 'assets/wmg1_lf1.png',
		        'monster21': 'assets/wmg1_rt1.png',

		        // Elements
		        'fire': 'assets/conjure_ball_lightning.png',

		        // Labyrinth
		        'wall': 'assets/stone_brick12.png',
		        'floor': 'assets/crystal_floor3.png',
		        'arena': 'assets/rough_red0.png'
		    }

		    this.sprites = [];
		    for (var spriteName in spritesImg) {
		    	nbSpritesLoading++;
		    	var sprite = new Image();
		    	sprite.onload = function () {
		    		nbSpritesLoaded++;

		    		if (nbSpritesLoaded === nbSpritesLoading) {
		    			nbSpritesLoaded = -Infinity;
		    			callback();
		    		}
		    	}
		    	sprite.src = spritesImg[spriteName];
		    	this.sprites[spriteName] = sprite;
		    }
		}

		Screen.prototype = {
			printRect: function(x1, y1, w, h, color) {
				this.context.fillStyle = color;
				this.context.fillRect(x1, y1, w, h);
			},
			drawWall: function(x, y) {
				this.context.drawImage(this.sprites['wall'], x, y);
			},
			drawFloor: function(x, y) {
				this.context.drawImage(this.sprites['floor'], x, y);
			},
			drawArena: function(x, y) {
				this.context.drawImage(this.sprites['arena'], x, y);
			},
			drawPlayer: function (iPlayer, x, y, direction) {
				direction = direction || 1;
				this.playersMapCxt.drawImage(this.sprites['player' + iPlayer + direction.toString()], x, y);
			},
			drawMonster: function (iMonster, x, y, direction) {
				direction = direction || 1;
				this.playersMapCxt.drawImage(this.sprites['monster' + iMonster + direction.toString()], x, y);
			},
			drawFire: function(x, y) {
				this.playersMapCxt.drawImage(this.sprites['fire'], x, y);
			}
		}

		return Screen;
	}
);