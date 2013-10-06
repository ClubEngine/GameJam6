SoundManager = {
	init: function () {
		if (!createjs.Sound.initializeDefaultPlugins()) { return; }
	
		var audioPath = "assets/sounds/";
		var manifest = [
		{
			id: "South1",
			src: "south/south_english_1.ogg"
		},
		{
			id: "South2",
			src: "south/south_english_2.ogg"
		},
		{
			id: "South3",
			src: "south/south_english_3.ogg"
		},
		{
			id: "South4",
			src: "south/south_english_4.ogg"
		},
		{
			id: "South5",
			src: "south/south_english_5.ogg"
		},
		{
			id: "South6",
			src: "south/south_english_6.ogg"
		},
		{
			id: "South7",
			src: "south/south_english_7.ogg"
		},
		{
			id: "North1",
			src: "north/north_english_1.ogg"
		},
		{
			id: "North2",
			src: "north/north_english_2.ogg"
		},
		{
			id: "North3",
			src: "north/north_english_3.ogg"
		},
		{
			id: "North4",
			src: "north/north_english_4.ogg"
		},
		{
			id: "North5",
			src: "north/north_english_5.ogg"
		},
		{
			id: "North6",
			src: "north/north_english_6.ogg"
		},
		{
			id: "North7",
			src: "north/north_english_7.ogg"
		},
		{
			id: "East1",
			src: "east/east_english_1.ogg"
		},
		{
			id: "East2",
			src: "east/east_english_2.ogg"
		},
		{
			id: "East3",
			src: "east/east_english_3.ogg"
		},
		{
			id: "East4",
			src: "east/east_english_4.ogg"
		},
		{
			id: "West1",
			src: "west/west_english_1.ogg"
		},
		{
			id: "West2",
			src: "west/west_english_2.ogg"
		},
		{
			id: "West3",
			src: "west/west_english_3.ogg"
		},
		{
			id: "Yes1",
			src: "yes/yes_english_1.ogg"
		},
		{
			id: "Yes2",
			src: "yes/yes_english_2.ogg"
		},
		{		
			id: "Yes3",
			src: "yes/yes_english_3.ogg"
		},
		{
			id: "Yes4",
			src: "yes/yes_english_4.ogg"
		},
		{
			id: "Yes5",
			src: "yes/yes_english_5.ogg"
		},
		{
			id: "No1",
			src: "no/no_english_1.ogg"
		},
		{
			id: "No2",
			src: "no/no_english_2.ogg"
		},
		{
			id: "No3",
			src: "no/no_english_3.ogg"
		},
		{
			id: "No4",
			src: "no/no_english_4.ogg"
		},
		{
			id: "No5",
			src: "no/no_english_5.ogg"
		},
		{
			id: "No6",
			src: "no/no_english_6.ogg"
		},
		{
			id: "Wurst",
			src: "wurst.ogg"
		},
		{
			id: "Bordel",
			src: "bordel.ogg"
		}
		];
	
		createjs.Sound.registerManifest(manifest, audioPath);
	},
	
    play: function (soundName) {
		createjs.Sound.play(soundName);
	}
}
