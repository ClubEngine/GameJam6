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

	var push_date = Date.now();
	var ball_date = Date.now();
	var action = function() { this.state = Action.IDLE; };
	

	var player = new Actor(); player.setSpriteId(1); player.setPosition(1, 0);

	var entities = new Array();
	entities[0] = player;

	var monster = new Actor(); monster.setSpriteId(11);monster.setPosition(5,1);
        entities[1] = monster;
        var monster1 = new Actor(); monster1.setSpriteId(11);monster1.setPosition(2,3);
        entities[2] = monster1;
        var monster2 = new Actor(); monster2.setSpriteId(12);monster2.setPosition(7,4);
        entities[3] = monster2;	


	var graphics = new Graphics(startGame);

	function startGame () {
		graphics.setLabyrinth(lab);

		initKdConf(action);	
		kd.run(function () {
			kd.tick();

		// prevent player to move super quickly	
		if (action.state != Action.IDLE) {	
			if (Date.now() > push_date + 150) {
				push_date = Date.now();
				
				doMovement(player, lab, action.state);
				
				if (action.state >= Action.FIRE_U && action.state <= Action.FIRE_L) {
					ball = new Actor();
					ball.setPosition(player.getPosition().x, player.getPosition().y);
					ball.setSpriteId(SpriteCode.FIRE_BALL);
					ball.setDirection(action.state);
					entities.push(ball);
				}

			}
		}


		if (Date.now() > ball_date + 100) {
                        ball_date = Date.now();
                        
                        newEntities = entities.slice();
                        for (var i in entities) {
                                if(entities[i].getSpriteId() == SpriteCode.FIRE_BALL){
                                        var ball = entities[i];
                                        toRm = doMovementFireBall(ball, lab, ball.getDirection());
                                        if (!toRm) {
                                                for (var j in entities) {
                                                        if (i!=j) {
                                                                tmp_other = entities[j];
                                                                if (ball.getPosition().x == tmp_other.getPosition().x &&
                                                                        ball.getPosition().y == tmp_other.getPosition().y) {
                                                                        newEntities = delTabElement(newEntities, tmp_other);    
                                                                        toRm = true;
                                                                }
                                                        }
                                                }       
                                        }       
                                        if (toRm) {
                                                newEntities = delTabElement(newEntities, ball);
                                        }

				}
                        }
                        entities = newEntities;
                }

		
		graphics.refreshAll(entities);
		});	
	}
});

function playBall()
{
	SoundManager.play("Ball");
}
function playDepop()
{
	SoundManager.play("Depop");
}
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

