console.log('Intro to JS');

//x = 100

//consol.log(x);
var x = 100; //global variable

(function){
	var x;
	//x = 1000;
function foo () {

	

	console.log(x);
	

}

foo();

//

{)();

//expression

var d = function () { console.log('this is a function expression') }; //function

d();


//declaration
function foo() { console.log('this is a function declaration')}
//foo

foo();

//IFFE
(function () {
	console.log('IFFE Function');

//operators

//&& //and
//|| //or 
//== //equal to equality
//=== //strict equality
//!= //not equal
//=~ //regex

//boolean is either T or F or 1 or 0
//var x = '100'
//x == 100 , would return a boolean of T
//x === 100, would return F because 100 is not strictly an integer, its a string

var x = 1;
var y = 1;
if (x && y) {
	console.log('Both x anad y are true'); //both x and y must be true for the console.lof to run

} else if (y > 100) {}

}

//if x was false, it would not run
//if we put in an 'or' operator, it would still run if at least one is true

// if (x != y) {
//	console.log("x cannot be equal to y for this to run")
//}


//objects

var object = {
	sum: function( a, b){
		var total = a + b;
		console.log(total);
	}
};

object.sum(10, 20)

function sum (a, b) {
	var total = a + b;
	console.log(total);

}

sum(10, 20)



object.prototype.bar = function () {
	console.log("object prototype of bar()");

};

