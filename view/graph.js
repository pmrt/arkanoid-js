class Element {

	constructor(attribs, svg) {
		/*
			This are the default attribs
			and parameters, they are a must be
			to each new element in order to
			draw(),setPosition() functions to
			work properly.
		*/
		this.attribs = undefined;
		this.attribKeys = undefined;
		this.x = undefined;
		this.y = undefined;
		this.xAttrib = undefined;
		this.yAttrib = undefined;
		this.parent = undefined;
		this.element = undefined;
	}

	draw() {
		this.setPosition(this.x, this.y);

		for (let attrib of this.attribKeys) {
			this.element.setAttribute(attrib, this.attribs[attrib]);
		}
		this.parent.appendChild(this.element);
	}

	setPosition(x,y) {
		this.element.setAttribute(this.xAttrib,x);
		this.element.setAttribute(this.yAttrib,y);
		this.x = x;
		this.y = y;
	}
}

class Ball extends Element {

	constructor(attribs, id, svg, velocity) {
		super();
		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.x = this.attribs.cx;
		this.y = this.attribs.cy;
		this.xAttrib = 'cx';
		this.yAttrib = 'cy';
		this.parent = svg.element;
		this.element = document.createElementNS('http://www.w3.org/2000/svg','circle');

		this.velocity = velocity;
		this.element.id = id;
	}

	move(v) {
		var vx = parseInt(this.element.cx.animVal.value) + v;
		var vy = parseInt(this.element.cy.animVal.value) + v;
		this.setPosition(vx,vy);
	}
}

class Svg extends Element {

	constructor(attribs, parent){
		super();
		this.parent = parent || document.body;
		this.attribs = attribs;
		this.attribKeys = Object.keys(attribs);
		this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	}
}
