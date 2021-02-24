// ES6---------------spread operator---------

var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];
var c = [...a, ...b]; // this '...' is spread operator. It is like a opener or spreader.
console.log(c);

var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];
var c = [a, ...b];
console.log(c);
