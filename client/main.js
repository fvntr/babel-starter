'use strict'; 

require('babel/polyfill'); 
var utils = require('./utils'); 
var iso = require('../../portable'); 
var fibonacci = iso.fibonacci;
// var Square = require('./Square');

console.log('Client side code started');
console.log(iso.validateId('USER_0002'));

// var s1 = new Sqaure(5); 
// var s2 = new Sqaure(); 

// console.log(s1.area, s2.area);
// console.log(s1.sayName());

console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next(true));