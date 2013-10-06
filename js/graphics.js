
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
		console.log(this.labyrinth, CaseCode.WALL);
		console.log(this.labyrinth.getWidth(), this.labyrinth.getHeight());
		for (y = 0; y < this.labyrinth.getHeight(); y++ ) {
			for (x = 0; x < this.labyrinth.getWidth(); x++ ) {
				var type = parseInt(this.labyrinth.get(x, y));
				console.log(x, y, type);
				if (type == CaseCode.WALL) {
					screen.printRect(32*x,32*y,32,32, "rgba(64,64,64,1)");
				}	
				else if (type == CaseCode.GROUND) {
					screen.printRect(32*x,32*y,32,32, "rgba(255,255,255,1)");
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
