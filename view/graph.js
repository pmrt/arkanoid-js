/*
Reusing Element class to
define the graphic side.

This way I got a single class
but a MVC model.

Note: Don't do this for large
projects use two class, for splitting
model classes from the view ones, instead.
(e.g: GraphicBall and Ball)
*/

Element.prototype.draw = function() {
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


Element.prototype.setPosition = function(x,y){
		/*
			Set the element position,
			update its coords.
		*/
		this.element.setAttribute(this.tagX, x);
		this.element.setAttribute(this.tagY, y);
		this.x = x; this.y = y;
}

function getDocument() {
	/*
		Get the document.
		@Return: obj.
	*/
	return document;
}
