// Labyrinth 
// contains a board of case

// Constructor
// param width(int)
// param height(int)
function Labyrinth(width, height) {
	this.mData = new Array(width, height);
	this.mWidth = width;
	this.mHeight = height;
}

function Labyrinth.prototype = {

	// Get the case code at the coo x y
	// return (int) Case code (see Case enum)
	function get(x,y) {
		return this.mData[x,y};
	}

	// Get the physic collision of the case at the coo x y
	// return (bool) True if the object is an obstacle, else False
	function isObstacle(x,y) {
		var c = this.getGraphic(x,y);
		return c == 2;
	}

	
	// Set the case code into the coo x y
	function set(x,y,code) {
		this.mData[x,y] = code;		
	}

}
