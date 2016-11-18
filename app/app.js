var self;

class Game {
	/*
		Game model class.
	*/
	constructor(){
		self = this;
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
		self.balls[id].x = x;
		self.balls[id].y = y;
		console.log(self.balls[id].x);
	}

	getBallsLength() {
		/*
			Get the balls length.
			@Return: int
		*/
		return Object.keys(this.balls).length
	}
}
