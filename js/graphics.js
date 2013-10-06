
var Graphics = function (name) {
	// constructor

	// set attribute
	this.mapGraphic = null;

}

Graphics.prototype = {
	setMatrix: function (matrix, sizeX, sizeY) {
		if (this.mapGraphic) {
			this.mapGraphic.setMatrix(matrix, sizeX, sizeY);
		} else {
			this.mapGraphic = new MapGraphic(matrix, sizeX, sizeY);
		}
		this.mapGraphic.print();
	},
}

var Screen = {
	this.$map = document.getElementById('map');
	this.width = this.$map.width;
	this.height = this.$map.height;
  	this.context = this.$map.getContext('2d');
}

Screen.prototype = {
	// x1, y1, x2, y2 : chiffres
	// color: "rga(0, 0, 255, 0.5)"
	printRect: function(x1, y1, x2, y2, color) {
  		this.context.fillStyle = color;
  		this.context.fillRect(x1, y1, x2, y2);
	}
}
var screen = new Screen();
screen.printRect(20, 20, 50, 50, "rgba(255, 255, 255, 1)");

var MapGraphic = function (matrix, sizeX, sizeY) {
	this.matrix = matrix;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
}

MapGraphic.prototype = {
	print: function() {
		// Parcours de la matrice et affichage d'un 
		// carré de couleur différente pour chaque nombre
	}
}

var graphics = new Graphics();
graphics.setMatrix([[1, 1, 2], [1, 1, 1], [1, 2, 1]], 3, 3);
