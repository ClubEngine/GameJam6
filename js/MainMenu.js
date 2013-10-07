var MainMenu = {
	init: function ($elem, labyrintic) {
		this.$elem = $elem;
		this.game = labyrintic;

		this.currMap = null;
		this.playerID = null;

		var self = this;
		this.$elem.on('click', 'li', function () {
			var $selected = $(this).addClass('active');
			$selected.siblings('.active').removeClass('active');

			self.currMap = ($selected.data('map') || self.currMap);
			self.playerID = ($selected.data('pid') || self.playerID);
		});

		this.$elem.on('click', '#start-game', function () {
			if (self.currMap && self.playerID) {
				self.hide();
				self.game.show();
				self.game.start(self.currMap);
			}
		});
	},

	show: function () {
		this.$elem.show();
	},

	hide: function () {
		this.$elem.hide();
	}
}