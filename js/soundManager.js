SoundManager = {
	init: function () {
		if (!createjs.Sound.initializeDefaultPlugins()) { return; }
	
		var audioPath = "assets/sounds/";
		var manifest = [
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