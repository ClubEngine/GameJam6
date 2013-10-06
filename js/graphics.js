
var Screen = function() {
	this.map = document.getElementById('map');
	this.width = this.map.width;
	this.height = this.map.height;
  	this.context = this.map.getContext('2d');
}

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
	drawPlayer1: function(x, y) {
		this.draw(x,y, "assets/Player1.png");
	},
	drawPlayer2: function(x, y) {
		this.draw(x,y, "assets/Player2.png");
	},
	drawMonster1: function(x, y) {
		this.draw(x,y, "assets/Monster1.png");
	},
	drawMonster2: function(x, y) {
		this.draw(x,y, "assets/Monster2.png");
	},

}
var screen = new Screen();
screen.printRect(0, 0, screen.width, screen.height, "rgba(255, 255, 255, 0.5)");
  
var MapGraphic = function (labyrinth) {
	this.labyrinth = labyrinth
}

MapGraphic.prototype = {
    print: function(origin_x, origin_y, visionScope) {
	// Parcours de la matrice et affichage d'un 
	// carré de couleur différente pour chaque nombre
	for (y = 0; y < this.labyrinth.getHeight(); y++ ) {
	    for (x = 0; x < this.labyrinth.getWidth(); x++ ) {
		var type = parseInt(this.labyrinth.get(x, y));
		if (!this.is_visible(origin_x, origin_y, visionScope, x, y) || type == CaseCode.UNDEFINED) {
		    screen.printRect(32*x,32*y,32,32, "rgba(255,0,0,1)");
		}
		else if (type == CaseCode.WALL) {
		    screen.drawWall(32*x,32*y);
		}	
		else if (type == CaseCode.GROUND) {
		    screen.drawFloor(32*x,32*y);
		}	
	    }		
	}
    },
    
    is_visible: function (origin_x, origin_y, visionScope, x, y) {
	var diff_x = x - origin_x;
	var diff_y = y - origin_y;
	return (diff_x < visionScope && diff_y < visionScope && diff_x > -visionScope && diff_y > -visionScope)
    }
}

var Graphics = function (name) {
	// constructor

	// set attribute
	this.mapGraphic = null;

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



var EntityGraphic = function (entity) {
	this.entity = entity;
}

EntityGraphic.prototype = {
	print: function () {
		var pos = this.entity.getPosition();
		var spriteId = this.entity.getSpriteId();
		if (spriteId == SpriteCode.PLAYER1) {
			screen.drawPlayer1(32*pos.x,32*pos.y);
		}
		else if (spriteId == PLAYER2) {
			screen.drawPlayer2(32*pos.X,32*pos.Y);
		}		
		else if (spriteId == MONSTER1) {
			screen.drawMonster1(32*pos.X,32*pos.Y);
		}
		else if (spriteId == MONSTER2) {
			screen.drawMonster2(32*pos.X,32*pos.Y);
		}
	},
}

