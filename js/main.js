$(document).ready(function () {
	SoundManager.init();
//	playSouth();
//	playNorth();
//	playEast();
//	playWest();
//	playYes();
//	playNo();
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

function playNorth()
{
	i=Math.floor((Math.random()*100)%7)+1;
	SoundManager.play('North'+i);


}
function playSouth()
{
	i=Math.floor((Math.random()*100)%7)+1;
	SoundManager.play('South'+i);

}

function playEast()
{
	i=Math.floor((Math.random()*100)%4)+1;
	SoundManager.play('East'+i);

}


function playWest()
{
	i=Math.floor((Math.random()*100)%3)+1;
	SoundManager.play('West'+i);

}


function playYes()
{
	i=Math.floor((Math.random()*100)%5)+1;
	SoundManager.play('Yes'+i);
}

function playNo()
{
	i=Math.floor((Math.random()*100)%6)+1;
	SoundManager.play('No'+i);
}
function playRNorth()
{
	i=Math.floor((Math.random()*100)%7)+1;
	SoundManager.play('RNorth'+i);


}
function playRSouth()
{
	i=Math.floor((Math.random()*100)%7)+1;
	SoundManager.play('RSouth'+i);

}

function playREast()
{
	i=Math.floor((Math.random()*100)%4)+1;
	SoundManager.play('REast'+i);

}


function playRWest()
{
	i=Math.floor((Math.random()*100)%3)+1;
	SoundManager.play('RWest'+i);

}


function playRYes()
{
	i=Math.floor((Math.random()*100)%5)+1;
	SoundManager.play('RYes'+i);
}

function playRNo()
{
	i=Math.floor((Math.random()*100)%6)+1;
	SoundManager.play('RNo'+i);
}

