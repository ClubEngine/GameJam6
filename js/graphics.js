
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
}

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
	}	

}
var screen = new Screen();
screen.printRect(0, 0, screen.width, screen.height, "rgba(255, 255, 255, 0.5)");
  


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

var graphics = new Graphics();
var labychou = labyrinthFactory("test");
graphics.setLabyrinth(labychou);
