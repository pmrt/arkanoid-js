window.onload = () => {

	var gameDiv = document.getElementById('game');
	var ballAttribs = {
					'r': '20',
					'cy': '100',
					'cx': '100',
				}

	var svgAttribs = {
					'width': '1000',
					'height': '500',
					'style' : 'border: 1px solid black'
				}

	var platformAttribs = {
					'x' : '500',
					'y' : '460',
					'width': '100',
					'height': '20'
				}


	svg = Arkanoid.buildSVG(svgAttribs, gameDiv);
	game = Arkanoid.loadGame(svg);
	Arkanoid.createBall(ballAttribs, 'id1', svg, 3, game);
	Arkanoid.createPlatform(platformAttribs, svg, 20, game);

	Arkanoid.startGame(game);
}
