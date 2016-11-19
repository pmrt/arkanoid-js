var self;

class Element {
	/*
		Element class model.
	*/
	constructor(attribs, svg) {
		/*
			This are the default attribs
			and parameters, they are a must be
			to each new element in order to
			draw(),setPosition() functions to
			work properly.

			this.attribs = undefined;
			this.attribKeys = undefined;
			this.x = undefined;
			this.y = undefined;
			this.tagX = undefined;
			this.tagY = undefined;
			this.parent = undefined;
			this.element = undefined;
		*/
	}

	draw() {
		/*
			Draw the element:
			 	- Set its position
			 	- Set its attribs
			 	- Add it to its parent
		*/
		this.setPosition(this.x, this.y);

		for (let attrib of this.attribKeys) {
			this.element.setAttribute(attrib, this.attribs[attrib]);
		}
		this.parent.appendChild(this.element);
	}

	setPosition(x,y) {
		/*
			Set the element position.
		*/
		self.element.setAttribute(self.tagX, x);
		self.element.setAttribute(self.tagY, y);
		self.x = x;
		self.y = y;
	}

}

class Brick extends Element {
	/*
		Brick element class.
	*/
}

class Ball extends Element {
	/*
		Ball element class.
	*/
	constructor(attribs, id, svg, velocity) {
		super();
		self = this;

		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.x = this.attribs.cx;
		this.y = this.attribs.cy;
		this.tagX = 'cx';
		this.tagY = 'cy';
		this.parent = svg.element;
		this.element = document.createElementNS('http://www.w3.org/2000/svg','circle');

		this.vy = velocity;
		this.vx = velocity;
		this.element.id = id;
	}

	move() {
		/*
			Move the value by the passed 'v' increment.
		*/
		// TO-DO: To increment velocity when space press.
		self.px = parseInt(self.element.cx.animVal.value) + self.vx;
		self.py = parseInt(self.element.cy.animVal.value) + self.vy;

		if (!self.hasCollide()){
			self.setPosition(self.px,self.py);
		}
		return [self.x, self.y];
	}

	hasCollide() {
		/*
			Checks for element collision.

			-x : X axis, bottom border
			-y : Y axis, right border
			+x : X axis, top border
			+y : Y axis, left border
		*/
		let width = self.parent.width.animVal.value;
		let height = self.parent.height.animVal.value;
		let radius = parseInt(self.attribs.r);

		if (width-self.x <= radius) {
			self.movCorrection('-x', width, radius);
		} else if (height-self.y <= radius) {
			self.movCorrection('-y', height, radius);
		} else if (self.x <= radius) {
			self.movCorrection('+x', 0, radius);
		} else if (self.y <= radius) {
			self.movCorrection('+y', 0, radius);
		} else {
			return false;
		}
	}

	movCorrection(axis, size, radius) {
		/*
			Movement correction when ball
			collides.
		*/
		switch (axis) {
			case '-x':
				self.setPosition(size-radius-1, self.py);
				self.vx *= (-1);
				break;
			case '-y':
				self.setPosition(self.px, size-radius-1);
				self.vy *= (-1);
				break;
			case '+x':
				self.setPosition(radius+1, self.py);
				self.vx *= (-1);
				break;
			case '+y':
				self.setPosition(self.px, radius+1);
				self.vy *= (-1);
				break;
		}
		self.move();
	}
}

class Svg extends Element {
	/*
		Graphic svg element class.
	*/
	constructor(attribs, parent){
		super();
		self = this;

		this.parent = parent || document.body;
		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	}
}

