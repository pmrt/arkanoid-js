var that;
var self;

class Game {
	/*
		Game model class.
	*/
	constructor(svg){
		that = this;
		this.balls = {};
		this.svg = svg;
	}

	addBall(ballObj) {
		/*
			Stores a new ball in the JSON.

			E.g.
			balls = {
						'id' : { obj: Object, x: '200', y: '100'}
					}
		*/
		this.balls[ballObj.element.id] = {'obj': ballObj, 'x': ballObj.x, 'y': ballObj.y};
	}

	addPlatform(platformObj) {
		this.platform = platformObj;
	}

	updatePos(id, x, y) {
		/*
			Change the position in the
			JSON ball to the passed
			ballObj.
		*/
		that.balls[id].x = x;
		that.balls[id].y = y;
	}

	getBallsLength() {
		/*
			Get the balls length.
			@Return: int
		*/
		return Object.keys(this.balls).length;
	}
}

class Element {
	/*
		Element class model.
	*/
	constructor(attribs, parent, element, id) {
		/*
			This are the default attribs
			and parameters, they are a must be
			to each new element in order to
			draw(),setPosition() functions to
			work properly.
		*/
		this.parent = parent.element || parent;
		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.element = document.createElementNS('http://www.w3.org/2000/svg', element);
		this.element.id = id;
	}
}

class Brick extends Element {
	/*
		Brick element class.
	*/
	constructor(attribs, svg, id, health) {
		super(attribs, svg, 'rect', id);
		this.health = health;
	}

	hit(){
		if (this.health > 0) {
			this.healt--;
		}
	}
}

class Platform extends Element {
	/*
		Platform element class.
	*/
	constructor(attribs, svg, velocity) {
		super(attribs, svg, 'rect', 'platform');
		self = this;
		this.x = parseInt(this.attribs.x); this.y = parseInt(this.attribs.y);
		this.tagX = 'x'; this.tagY = 'y';
		this.velocity = velocity;
		this.width = parseInt(this.attribs.width);
		this.height = parseInt(this.attribs.height);
	}

	move(e) {
		if (!self.checkCollision()){
			switch(e.key) {
				case 'A': // Left
				case 'a':
					self.setPosition(parseInt(self.x) - self.velocity, self.y);
					break;
				case 'D': // Rigth
				case 'd':
					self.setPosition(parseInt(self.x) + self.velocity, self.y);
					break;
			}
		}
	}

	checkCollision() {
		let svgWidth = this.parent.width.animVal.value;

		if (this.x + this.width >= svgWidth) {
			this.setPosition(svgWidth-(svgWidth-self.x)-10, self.y);
			return true;
		} else if (this.x <= 0) {
			this.setPosition(10, self.y);
			return true;
		} else {
			return false;
		}
	}
}

class Ball extends Element {
	/*
		Ball element class.
	*/
	constructor(attribs, id, svg, velocity) {
		super(attribs, svg, 'circle', id);
		this.x = this.attribs.cx; this.y = this.attribs.cy;
		this.tagX = 'cx'; this.tagY = 'cy';
		this.vx = velocity; this.vy = velocity;
	}

	move() {
		/*
			Move the value by the passed 'v' increment.
		*/
		this.px = parseInt(this.element.cx.animVal.value) + this.vx;
		this.py = parseInt(this.element.cy.animVal.value) + this.vy;
		this.setPosition(this.px,this.py);
		return [this.x, this.y];
	}

	hasCollideWith(elementObj) {
		/*
			Checks for element collision.

			-x : X axis, bottom border
			-y : Y axis, right border
			+x : X axis, top border
			+y : Y axis, left border

			It returns false if it doesn't collide,
			or corrects the movement if it does.

			Note: May return a not boolean value!

			@Return: false or undefined;
		*/
		let radius = parseInt(this.attribs.r);

		if (this.x+radius > elementObj.x &&
			this.x+radius < elementObj.x+elementObj.width &&
			this.y+radius > elementObj.y &&
			this.y+radius < elementObj.y+elementObj.height) {
				this.setPosition(this.px, this.py-1);
				this.vy *= (-1);
		} else {
				return false;
		}
	}

	hasCollideWithSVG() {
		/*
			Checks for element collision.

			It returns false if it doesn't collide,
			or corrects the movement if it does.

			Note: May return a not boolean value!

			@Return: false or undefined;
		*/
		let width = this.parent.width.animVal.value;
		let height = this.parent.height.animVal.value;
		let radius = parseInt(this.attribs.r);

		if (width-this.x <= radius) {
			this.wallCorrection('-x', radius);
		} else if (height-this.y <= radius) {
			this.wallCorrection('-y', radius);
		} else if (this.x <= radius) {
			this.wallCorrection('+x', radius);
		} else if (this.y <= radius) {
			this.wallCorrection('+y', radius);
		} else {
			return false;
		}
	}

	wallCorrection(axis, radius) {
		/*
			Movement correction when ball
			collides.

			-x : X axis, right border
			-y : Y axis, bottom border
			+x : X axis, left border
			+y : Y axis, top border
		*/
		switch (axis) {
			case '-x':
				this.setPosition(this.px-1, this.py);
				this.vx *= (-1);
				break;
			case '-y':
				alert('TO-DO. Game over message here.');
				this.setPosition(this.px, this.py-1);
				this.vy *= (-1);
				break;
			case '+x':
				this.setPosition(radius+1, this.py);
				this.vx *= (-1);
				break;
			case '+y':
				this.setPosition(this.px, radius+1);
				this.vy *= (-1);
				break;
		}
		this.move();
	}
}

class Svg extends Element {
	/*
		Graphic svg element class.
	*/
	constructor(attribs, parent){
		super(attribs, parent, 'svg', 'svg');
		this.width = parseInt(this.attribs.width);
		this.height = parseInt(this.attribs.height);
	}
}



