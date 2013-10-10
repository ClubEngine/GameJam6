var MainMenu = {
	init: function ($elem, labyrintic) {
		this.$elem = $elem;
		this.game = labyrintic;

		var self = this;
		this.$elem.on('click', 'li', function () {
			var $selected = $(this);
			// $selected.siblings('.active').removeClass('active');

			if ($selected.data('map') !== undefined) {
				Network.setMap($selected.data('map'));
			} else if ($selected.data('pid') !== undefined) {
				Network.setPlayer($selected.data('pid'));
			}
		});

		this.$elem.on('click', '#start-game', function () {
			if (self.currMap && self.playerID) {
				self.hide();
				self.game.show();
				self.game.start(self.currMap);
			}
		});
	},

	// selectPlayer: function (playerID) {
	// 	this.$elem.find('li[data-pid=' + playerID + ']')
	// 		.addClass('connected');
	// },

	// unselectPlayer: function (playerID) {
	// 	if (playerID !== this.playerID) {
	// 		this.$elem.find('li[data-pid=' + playerID + ']')
	// 			.removeClass('connected');
	// 	} else {
	// 		this.$elem.find('li[data-pid=' + playerID + ']')
	// 			.removeClass('active');

	// 		if (this.lastPlayerID) {
	// 			this.$elem.find('li[data-pid=' + this.lastPlayerID + ']')
	// 				.addClass('active');
	// 			this.playerID = this.lastPlayerID;
	// 			// lastPlayerID will not be accurate anymore but it does not
	// 			// matter
	// 		} else {
	// 			this.playerID = null;
	// 		}
	// 	}
	// },

	setState: function (state) {
		this.$elem.find('li').removeClass('active connected');

		this.$elem.find('li[data-map="' + state.map + '"]')
			.addClass('active');

		var players = state.players;
		for (var iPlayer = 0; iPlayer < players.length; ++iPlayer) {
			if (players[iPlayer] !== -1) {
				this.$elem.find('li[data-pid="' + iPlayer + '"]')
					.addClass(
						(players[iPlayer] === Network.getID())
							? 'active'
							: 'connected'
					);
			}
		}
	},

	show: function () {
		this.$elem.show();
	},

	hide: function () {
		this.$elem.hide();
	}
}