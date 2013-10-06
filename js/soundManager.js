SoundManager = {
	init: function () {
		if (!createjs.Sound.initializeDefaultPlugins()) { return; }
	
		var audioPath = "assets/sounds/";
		var manifest = [
		{
			id: "South",
			src: "south/south_english_5.ogg"
		},
		{
			id: "North",
			src: "north/north_english_7.ogg"
		},
		{
			id: "East",
			src: "east/east_english_1.ogg"
		},
		{
			id: "West",
			src: "west/west_english_3.ogg"
		},
		{
			id: "Yes",
			src: "yes/yes_english_1.ogg"
		},
		{
			id: "No",
			src: "no/no_english_1.ogg"
		},
		{
			id: "Wurst",
			src: "wurst.ogg"
		},
		{
			id: "Bordel",
			src: "bordel.ogg"
		}];
	
		createjs.Sound.registerManifest(manifest, audioPath);
	},
	
    play: function (soundName) {
		createjs.Sound.play(soundName);
	}
}