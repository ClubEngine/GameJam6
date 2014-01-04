define(['soundjs'], function (createjs) {
	return {

		audioPath: 'assets/sounds/',

		sounds: {
			// North
			'North1': 'north/north_english_1.ogg',
			'North2': 'north/north_english_2.ogg',
			'North3': 'north/north_english_3.ogg',
			'North4': 'north/north_english_4.ogg',
			'North5': 'north/north_english_5.ogg',
			'North6': 'north/north_english_6.ogg',
			'North7': 'north/north_english_7.ogg',

			'ReversedNorth1': 'north/reverse/north_english_1.ogg',
			'ReversedNorth2': 'north/reverse/north_english_2.ogg',
			'ReversedNorth3': 'north/reverse/north_english_3.ogg',
			'ReversedNorth4': 'north/reverse/north_english_4.ogg',
			'ReversedNorth5': 'north/reverse/north_english_5.ogg',
			'ReversedNorth6': 'north/reverse/north_english_6.ogg',
			'ReversedNorth7': 'north/reverse/north_english_7.ogg',

			// South
			'South1': 'south/south_english_1.ogg',
			'South2': 'south/south_english_2.ogg',
			'South3': 'south/south_english_3.ogg',
			'South4': 'south/south_english_4.ogg',
			'South5': 'south/south_english_5.ogg',
			'South6': 'south/south_english_6.ogg',
			'South7': 'south/south_english_7.ogg',

			'ReversedSouth1': 'south/reverse/south_english_1.ogg',
			'ReversedSouth2': 'south/reverse/south_english_2.ogg',
			'ReversedSouth3': 'south/reverse/south_english_3.ogg',
			'ReversedSouth4': 'south/reverse/south_english_4.ogg',
			'ReversedSouth5': 'south/reverse/south_english_5.ogg',
			'ReversedSouth6': 'south/reverse/south_english_6.ogg',
			'ReversedSouth7': 'south/reverse/south_english_7.ogg',
			

			// West
			'West1': 'west/west_english_1.ogg',
			'West2': 'west/west_english_2.ogg',
			'West3': 'west/west_english_3.ogg',

			'ReversedWest1': 'west/reverse/west_english_1.ogg',
			'ReversedWest2': 'west/reverse/west_english_2.ogg',
			'ReversedWest3': 'west/reverse/west_english_3.ogg',

			// East
			'East1': 'east/east_english_1.ogg',
			'East2': 'east/east_english_2.ogg',
			'East3': 'east/east_english_3.ogg',
			'East4': 'east/east_english_4.ogg',

			'ReversedEast1': 'east/reverse/east_english_1.ogg',
			'ReversedEast2': 'east/reverse/east_english_2.ogg',
			'ReversedEast3': 'east/reverse/east_english_3.ogg',
			'ReversedEast4': 'east/reverse/east_english_4.ogg',

			// Yes
			'Yes1': 'yes/yes_english_1.ogg',
			'Yes2': 'yes/yes_english_2.ogg',
			'Yes3': 'yes/yes_english_3.ogg',
			'Yes4': 'yes/yes_english_4.ogg',
			'Yes5': 'yes/yes_english_5.ogg',

			'ReversedYes1': 'yes/reverse/yes_english_1.ogg',
			'ReversedYes2': 'yes/reverse/yes_english_2.ogg',
			'ReversedYes3': 'yes/reverse/yes_english_3.ogg',
			'ReversedYes4': 'yes/reverse/yes_english_4.ogg',
			'ReversedYes5': 'yes/reverse/yes_english_5.ogg',

			// NO
			'No1': 'no/no_english_1.ogg',
			'No2': 'no/no_english_2.ogg',
			'No3': 'no/no_english_3.ogg',
			'No4': 'no/no_english_4.ogg',
			'No5': 'no/no_english_5.ogg',
			'No6': 'no/no_english_6.ogg',

			'ReversedNo1': 'no/reverse/no_english_1.ogg',
			'ReversedNo2': 'no/reverse/no_english_2.ogg',
			'ReversedNo3': 'no/reverse/no_english_3.ogg',
			'ReversedNo4': 'no/reverse/no_english_4.ogg',
			'ReversedNo5': 'no/reverse/no_english_5.ogg',
			'ReversedNo6': 'no/reverse/no_english_6.ogg',

			// Misc.
			'Wurst': 'wurst.ogg',
			'Bordel': 'bordel.ogg',
			'Ball': 'samples/ball.ogg',
			'Depop': 'samples/depop.ogg',
			'Pas': 'samples/pas.ogg'
		},

		ready: false,

		init: function (callback) {
			if (!createjs.Sound.initializeDefaultPlugins()) {
				return;
			}

			var manifest = this._buildManifest();
			var nbSoundsToLoad = manifest.length, nbSoundsLoaded = 0;

			createjs.Sound.addEventListener('fileload', function (event) {
				nbSoundsLoaded++;

				if (nbSoundsLoaded === nbSoundsToLoad) {
					this.ready = true;
					callback(this);
				}
			});
			createjs.Sound.registerManifest(manifest, this.audioPath);
		},

		play: function (soundName) {
			createjs.Sound.play(soundName);
		},

		_buildManifest: function () {
			var manifest = [];

			for (var soundName in this.sounds) {
				manifest.push({
					'id': soundName,
					'src': this.sounds[soundName]
				});
			}

			return manifest;
		}
	};
});