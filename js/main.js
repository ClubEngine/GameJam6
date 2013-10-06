$(document).ready(function () {
	SoundManager.init();
	playSouth();
//	SoundManager.play('South1');
//	SoundManager.play('North');
//	SoundManager.play('East');
//	SoundManager.play('West');
//	SoundManager.play('Yes');
//	SoundManager.play('No');
//	SoundManager.play('Bordel');
//	SoundManager.play('Wurst');
});


function playSouth()
{
	i=(Math.random()*100)%8;

	switch (i)
	{
		case 1:
			SoundManager.play('South1');
			break;	
	
		case 2:
			SoundManager.play('South2');
			break;	

		case 3:
			SoundManager.play('South3');
			break;	

		case 4:
			SoundManager.play('South4');
			break;	

		case 5:
			SoundManager.play('South5');
			break;	
	

		case 6:
			SoundManager.play('South6');
			break;	

		case 7:
			SoundManager.play('South7');
			break;	

	}


}
