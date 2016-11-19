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

	static loadGame(svg) {
		/*
			Start the game.
			@Return: object
		*/
		let game = new Game(svg);

		return game;
	}

	static move(game) {
		/*
			Move the ball element:
				- Set its new position (View)
				- Store its new pos. (Model)
			TO-DO: To increment velocity when space press.
		*/
		for (let ballid of Object.keys(game.balls)) {
			/*
				Move the ball if it hasn't Collide with SVG,
				if it happen to collide it will apply the
				right movement correction.
			*/
			if (!game.balls[ballid].obj.hasCollideWithSVG()) {
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
		setInterval(function() {
			Arkanoid.move(game)
		}, 20);
	}
}
