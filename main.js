window.onload = init;

function init() {
	var gameDiv = document.getElementById('game');

	svg = Arkanoid.buildSVG('1000', '500',gameDiv);
	game = Arkanoid.startGame();
	Arkanoid.createBall('50','50','20', 5, svg.element, game);
}