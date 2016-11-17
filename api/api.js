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

	static startGame() {
		/*
			Start the game.
			@Return: object
		*/
		let game = new Game();

		return game;
	}

	static move() {
		/*
			Move the ball element:
				- Set its new position (View)
				- Store its new pos. (Model)
		*/

	}

	static getBallsLength(game) {
		/*
			Get the number of Balls.
			@Return: int
		*/
		return game.getBallsLength();
	}
}
