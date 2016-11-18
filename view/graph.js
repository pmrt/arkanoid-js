var that;

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
		that.element.setAttribute(that.tagX, x);
		that.element.setAttribute(that.tagY, y);
		that.x = x;
		that.y = y;
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
		that = this;

		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.x = this.attribs.cx;
		this.y = this.attribs.cy;
		this.tagX = 'cx';
		this.tagY = 'cy';
		this.parent = svg.element;
		this.element = document.createElementNS('http://www.w3.org/2000/svg','circle');

		this.velocity = velocity;
		this.element.id = id;
	}

	move(v) {
		/*
			Move the value by the passed 'v' increment.
		*/
		// TO-DO: To increment velocity when space press.
		var vx = parseInt(that.element.cx.animVal.value) + v;
		var vy = parseInt(that.element.cy.animVal.value) + v;
		that.setPosition(vx,vy);
		return [that.x, that.y];
	}

	checkCollision() {

	}
}

class Svg extends Element {
	/*
		Graphic svg element class.
	*/
	constructor(attribs, parent){
		super();
		that = this;

		this.parent = parent || document.body;
		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	}
}

