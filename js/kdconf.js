function initKdConf(action) {

	kd.UP.up(function() {
		action.state  = Action.IDLE;
	});

	kd.UP.down(function() {
		action.state  = Action.UP;
	});

	kd.DOWN.up(function() {
		action.state  = Action.IDLE;
	});

	kd.DOWN.down(function() {
		action.state  = Action.DOWN;
	});

	kd.RIGHT.up(function() {
		action.state = Action.IDLE;
	});

	kd.RIGHT.down(function() {
		action.state = Action.RIGHT;
	});

	kd.LEFT.up(function() {
		action.state  = Action.IDLE;
	});

	kd.LEFT.down(function() {
		action.state  = Action.LEFT;
	});
}

