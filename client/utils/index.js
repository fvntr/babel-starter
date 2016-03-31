'use strict';

module.exports = {
	counter
}

function counter(){
	var count = 100; 
	setInterval (() => console.log(count++), 400); 
}

