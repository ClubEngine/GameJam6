define(['socket.io'], function(io, MainMenu) {
	return {
		connect: function (callbacks) {
			var self = this;

			this._socket = io.connect('http://localhost:8080');
			this._callbacks = callbacks;

			this._socket.on('gst', function (state) {
				self._callbacks.setState(state, self);
			});
		},

		setMap: function (mapName) {
			this._socket.emit('map:set', {
				'id': mapName
			});
		},

		setPlayer: function (playerID) {
			this._socket.emit('player:set', {
				'id': playerID
			});
		},

		playerReader: function () {
			this._socket.emit('player:ready', {
				'id': playerID
			});
		},

		getID: function () {
			return this._socket.socket.sessionid;
		},
	}
});