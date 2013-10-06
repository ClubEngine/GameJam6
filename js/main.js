$(document).ready(function () {
	SoundManager.init();
	
//	SoundManager.play('South');
//	SoundManager.play('North');
//	SoundManager.play('East');
//	SoundManager.play('West');
//	SoundManager.play('Yes');
//	SoundManager.play('No');
//	SoundManager.play('Bordel');
//	SoundManager.play('Wurst');

	var lab = labyrinthFactory("test");	

	var player = new Actor();
	player.setSpriteId(1);
	player.setPosition(1, 0);
	var push_date = Date.now();
	var action = function() { this.state = Action.IDLE; };
	
	var entities = new Array();
	entities[0] = player;

	initKdConf(action);	

	var graphics = new Graphics(startGame);

	function startGame () {
		graphics.setLabyrinth(lab);
		graphics.mapGraphic.print(0, 0, 1024);
		kd.run(function () {
			kd.tick();
			
		// prevent player to move super quickly	
		if (action.state != Action.IDLE) {	
			if (Date.now() > push_date + 150) {
				push_date = Date.now();
				
				doMovement(player, lab, action.state);
			}
		}

		graphics.refreshAll(entities);
	});	
	}
});
