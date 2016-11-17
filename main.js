window.onload = init;

function init() {
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


	svg = Arkanoid.buildSVG(svgAttribs, gameDiv);
	game = Arkanoid.startGame();
	Arkanoid.createBall(ballAttribs, 'id1', svg, 5, game);
}
