class Arkanoid {

	static buildSVG(attribs, parent) {
		/*
			Build the graphic screen.
			@Return: object.
		*/
		let svg = new Svg(attribs, parent);
		svg.draw();

		return svg;
	}

	static createBall(attribs, id, svgParent, velocity, game) {
		/*
			Add ball.
			@Return: object.
		*/
		let ball = new Ball(attribs, id, svgParent, velocity);
		ball.draw();
		game.addBall(ball);

		return ball;
	}

	static loadGame() {
		/*
			Start the game.
			@Return: object
		*/
		let game = new Game();

		return game;
	}

	static move(game) {
		/*
			Move the ball element:
				- Set its new position (View)
				- Store its new pos. (Model)
		*/
		for (let i of Object.keys(game.balls)) {
			let coord = game.balls[i].obj.move(game.balls[i].obj.velocity);
			game.setPosition(i, coord[0], coord[1]);
		}
	}

	static getBalls(game){
		/*
		*/
	}

	static getBallsLength(game) {
		/*
			Get the number of Balls.
			@Return: int
		*/
		return game.getBallsLength();
	}

	static startGame(game) {
		/*
			Start the game.
		*/
		setInterval(function() {
			Arkanoid.move(game)
		}, 20);
	}
}
