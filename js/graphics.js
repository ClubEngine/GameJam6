
var Screen = function() {
	this.map = document.getElementById('map');
	this.width = this.map.width;
	this.height = this.map.height;
  	this.context = this.map.getContext('2d');
}
var screen;

Screen.prototype = {
	// x1, y1, x2, y2 : chiffres
	// color: "rga(0, 0, 255, 0.5)"
	printRect: function(x1, y1, w, h, color) {
  		this.context.fillStyle = color;
  		this.context.fillRect(x1, y1, w, h);
	},

	draw: function(x,y,src) {
    		var img = new Image();
    		img.src = src;
		var _this = this;
    		img.onload = function(){
      			_this.context.drawImage(img, x, y);
		}
	},
	drawWall: function(x, y) {
		this.draw(x,y, "assets/stone_brick12.png");
	},
	drawFloor: function(x, y) {
		this.draw(x,y, "assets/crystal_floor3.png");
	},	
	drawPlayer1: function(x, y, direct) { 
		if (direct == Action.UP) {
					
		this.draw(x,y, "assets/amg1_bk1.gif");
		} 
		else if ( direct == Action.DOWN) {
				
		this.draw(x,y, "assets/amg1_fr1.gif");
		}
		else if ( direct == Action.LEFT) {
				
		this.draw(x,y, "assets/amg1_lf1.gif");
		} 
		else if ( direct == Action.RIGHT) {
				
		this.draw(x,y, "assets/amg1_rt1.gif");
		}
	},
	drawPlayer2: function(x, y, direct) {
		if (direct == Action.UP) {
					
		this.draw(x,y, "assets/npc5_bk1.gif");
		} 
		else if ( direct == Action.DOWN) {
				
		this.draw(x,y, "assets/npc5_fr1.gif");
		} 
		else if ( direct == Action.LEFT) {
				
		this.draw(x,y, "assets/npc5_lf1.gif");
		} 
		else if ( direct == Action.RIGHT) {
				
		this.draw(x,y, "assets/npc5_rt1.gif");
		}
	},
	drawMonster1: function(x, y, direct) {
		if (direct == Action.UP) {
					
		this.draw(x,y, "assets/scr1_bk1.gif");
		} 
		else if ( direct == Action.DOWN) {
				
		this.draw(x,y, "assets/scr1_fr1.gif");
		} 
			
		else if ( direct == Action.LEFT) {
				
		this.draw(x,y, "assets/scr1_lf1.gif");
		} 
		else if ( direct == Action.RIGHT) {
				
		this.draw(x,y, "assets/scr1_rt1.gif");
		}
	},
	drawMonster2: function(x, y, direct) {
		if (direct == Action.UP) {	
		this.draw(x,y, "assets/wmg1_bk1.gif");
		} 
		else if ( direct == Action.DOWN) {
				
		this.draw(x,y, "assets/wmg1_fr1.gif");
		} 
		else if ( direct == Action.LEFT) {
				
		this.draw(x,y, "assets/wmg1_lf1.gif");
		} 
		else if ( direct == Action.RIGHT) {
				
		this.draw(x,y, "assets/wmg1_rt1.gif");
		}
	},
	drawFire: function(x, y) {
		this.draw(x,y, "assets/conjure_ball_lightning.png");
	},

}
  
var MapGraphic = function (labyrinth) {
	this.labyrinth = labyrinth
}

MapGraphic.prototype = {
	print: function() {
		// Parcours de la matrice et affichage d'un 
		// carré de couleur différente pour chaque nombre
		for (y = 0; y < this.labyrinth.getHeight(); y++ ) {
			for (x = 0; x < this.labyrinth.getWidth(); x++ ) {
				var type = parseInt(this.labyrinth.get(x, y));
				if (type == CaseCode.WALL) {
					screen.drawWall(32*x,32*y);
				}	
				else if (type == CaseCode.GROUND) {
					screen.drawFloor(32*x,32*y);
				}	
				else if (type == CaseCode.UNDEFINED) {
					screen.printRect(32*x,32*y,32,32, "rgba(255,0,0,1)");
				}	
			}		
		}
	}
}

var EntityGraphic = function (entity) {
	this.entity = entity;
}

EntityGraphic.prototype = {
	print: function () {
		var pos = this.entity.getPosition();
		var spriteId = this.entity.getSpriteId();
		var direct = this.entity.getDirection();
		if (spriteId == SpriteCode.PLAYER1) {
			screen.drawPlayer1(32*pos.x,32*pos.y, direct);
		}
		else if (spriteId == SpriteCode.PLAYER2) {
			screen.drawPlayer2(32*pos.x,32*pos.y, direct);
		}		
		else if (spriteId == SpriteCode.MONSTER1) {
			screen.drawMonster1(32*pos.x,32*pos.y, direct);
		}
		else if (spriteId == SpriteCode.MONSTER2) {
			screen.drawMonster2(32*pos.x,32*pos.y, direct);
		}
		else if (spriteId == SpriteCode.FIRE_BALL) {
			screen.drawFire(32*pos.x, 32*pos.y, direct);
		}
	},
}

var Graphics = function (name) {
	// constructor

	// set attribute
	this.mapGraphic = null;

	screen = new Screen();
	screen.printRect(0, 0, screen.width, screen.height, "rgba(255, 255, 255, 0.5)");
}

Graphics.prototype = {
	setLabyrinth: function (labyrinth) {
		if (this.mapGraphic) {
			this.mapGraphic.setMatrix(labyrinth);
		} else {
			this.mapGraphic = new MapGraphic(labyrinth);
		}
		this.mapGraphic.print();
	},
	
	refreshAll: function(entities) {
		this.mapGraphic.print();
		for (var i in entities) {
			var entity = entities[i];
			var entityGraphic = new EntityGraphic(entity);
			entityGraphic.print();
		}
	}
}




