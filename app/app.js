var that;

class Game {
	/*
		Game model class.
	*/
	constructor(svg){
		that = this;
		this.balls = {};
		this.svg = svg;
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

	updatePos(id, x, y) {
		/*
			Change the position in the
			JSON ball to the passed
			ballObj.
		*/
		that.balls[id].x = x;
		that.balls[id].y = y;
	}

	getBallsLength() {
		/*
			Get the balls length.
			@Return: int
		*/
		return Object.keys(this.balls).length
	}
}
