class Arkanoid {

	static buildSVG(width, height, parent) {
		/*
			Build the graphic screen.
			@Return: object.
		*/
		let svg = new Svg(width, height, parent);
		svg.draw();

		return svg;
	}


	static createBall(Xo, Yo, radius, velocity, svgParent, game) {
		/*
			Add ball.
			@Return: object.
		*/
		let ball = new Ball(Xo, Yo, radius, velocity, svgParent);
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
}