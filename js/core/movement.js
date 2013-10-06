function doMovement(actor, laby, action)
{
	var currentPos = actor.getPosition();
	var nextPos=currentPos;
	
	// change the new position
	switch (action)
	{
		case Action.UP:
			--nextPos.y;
			break;
	
		case Action.DOWN:
			++nextPos.y;
			break;
		
		case Action.RIGHT:
			++nextPos.x;
			break;
		
		case Action.LEFT:
			--nextPos.x;
			break;
	}

	// test if the new position is not an bstacle
	if (! laby.isObstacle(nextPos))
	{
		actor.setPosition(nextPos);
	}
}
