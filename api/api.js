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

	static createPlatform(attribs, svg, velocity, game) {
		/*
			Create the platform.
			@Return: object.
		*/
		let platform = new Platform(attribs, svg, velocity);
		platform.draw();
		game.addPlatform(platform);

		return platform;
	}

	static loadGame(svg) {
		/*
			Start the game.
			@Return: object
		*/
		return new Game(svg);
	}

	static move(game) {
		/*
			Move the ball element:
				- Set its new position (View)
				- Store its new pos. (Model)
		*/
		let collision = false;

		for (let ballid of Object.keys(game.balls)) {
			/*
				Move the ball if it hasn't Collide with SVG,
				if it happen to collide it will apply the
				right movement correction.
			*/
			collision = game.balls[ballid].obj.hasCollideWithSVG();
			collision = game.balls[ballid].obj.hasCollideWith(game.platform);

			if (!collision) {
				game.balls[ballid].obj.move();
			}

			/*
				Update the ball position in the model
			*/
			game.updatePos(ballid, game.balls[ballid].obj.x, game.balls[ballid].obj.y);
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
		Arkanoid.addPlatformEvent(game);

		setInterval(function() {
			Arkanoid.move(game)
		}, 20);
	}

	static addPlatformEvent(game) {
		/*
			Add platform event.
		*/
		getDocument().addEventListener('keypress', game.platform.move);
	}
}

// TO-DO: To increment velocity when space press.

