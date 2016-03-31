'use strict'; 

class Polygon {
	constructor(width, height){
		this.name = 'Polygon';
		this.width = width; 
		this.height = height; 
	}

	sayName() {
		console.log('Hi, this is a' + this.name); 
	}
}

module.exports = Polygon;