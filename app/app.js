class Game {

	constructor(){
		this.balls = {};
	}

	addBall(ballObj) {
		this.balls[ballObj] = {'x': ballObj.x, 'y': ballObj.y};
	}

	setPosition(ballObj, x, y) {
		this.balls.ballObj.x = x;
		this.balls.ballObj.y = y;
	}
}