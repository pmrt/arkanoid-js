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

	static createBall(attribs, svgParent, velocity, game) {
		/*
			Add ball.
			@Return: object.
		*/
		let ball = new Ball(attribs, svgParent, velocity);
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
