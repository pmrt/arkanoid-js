class Game {

	constructor(){
		this.balls = {};
	}

	addBall(ballObj) {
		/*
			Stores a new ball in the JSON.

			E.g.
			balls = {
						'id' : { obj: Object, x: '200', y: '100'}
					}
		*/
		this.balls[ballObj.element.id] = {'obj': ballObj, 'x': ballObj.x, 'y': ballObj.y};
	}

	setPosition(id, x, y) {
		/*
			Change the position in the
			JSON ball to the passed
			ballObj.
		*/
		this.balls.id.x = x;
		this.balls.id.y = y;
	}

	getBallsLength() {
		/*
			Get the balls length.
			@Return: int
		*/
		return Object.keys(this.balls).length
	}
}
