class Element {

	constructor(attribs) {
		/*
		attribs = { 
					'r': 5,
					'cy': '300',
					'cx': '400'
				}
		*/
		this.attribs = Object.keys(attribs);
	}

	draw() {
		this.setPosition(this.Xo, this.Yo);
		
	}

	setPosition(x,y) {
		this.element.setAttribute('cx',x);
		this.element.setAttribute('cy',y);
		this.x = x;
		this.y = y;
	}
}

class Ball extends Element {

	constructor(Xo, Yo, radius, velocity, svg) {
		// TO-DO. Add any attrib with JSON
		super();
		this.velocity = velocity;
		this.Xo = Xo;
		this.Yo = Yo;
		this.x = Xo;
		this.y = Yo;
		this.radius = radius;
		this.svg = svg;
		this.element = document.createElementNS('http://www.w3.org/2000/svg','circle');
	}

	draw() {
		this.setPosition(this.Xo, this.Yo);
		this.element.setAttribute('r', this.radius);
		this.svg.appendChild(this.element);
	}

	move(v) {
		var vx = parseInt(this.element.cx.animVal.value) + v;
		var vy = parseInt(this.element.cy.animVal.value) + v;
		this.setPosition(vx,vy);
	}

}

class Svg {

	constructor(width, height, color, parent){
		this.parent = parent || document.body;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		this.element.setAttribute("width", this.width);
		this.element.setAttribute("height", this.height);
		this.element.style.border = "1px solid black";
		this.parent.appendChild(this.element);
	}
}
