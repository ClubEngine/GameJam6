Network = {
	connect: function () {
		this.socket = io.connect('http://localhost:8080');

		this.socket.on('gst', function (state) {
			MainMenu.setState(state);
		});
	},

	// selectPlayer: function (playerID) {
	// 	this.socket.emit('player:select', {
	// 		'id': playerID
	// 	});
	// },

	// unselectPlayer: function (playerID) {
	// 	this.socket.emit('player:unselect', {
	// 		'id': playerID
	// 	});
	// }

	setMap: function (mapName) {
		this.socket.emit('map:set', {
			'id': mapName
		});
	},

	setPlayer: function (playerID) {
		this.socket.emit('player:set', {
			'id': playerID
		});
	},

	getID: function () {
		return this.socket.socket.sessionid;
	},
}

Network.connect();
