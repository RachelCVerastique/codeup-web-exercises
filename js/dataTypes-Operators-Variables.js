var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?

console.log( a + b + c);

var d = "hello";
var e = false;

d++;
e++;

console.log(d++);

console.log(e++);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

console.log(perplexed + 2);

var price = 2.7;
price.toFixed(2);

console.log(price.toFixed(2));

//var price = "2.7";
//price.toFixed(2);

console.log(price.toFixed(2));

console.log(isNaN(0))

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log( isNaN("1"));

console.log( isNaN("3.145"));

console.log( isNaN(Number.MAX_VALUE));

console.log( isNaN(Infinity));

console.log( isNaN("true"));

console.log( isNaN(true));


console.log( isNaN("false"));

console.log( isNaN(false));

// to illustrate why the isNaN() function is needed:
NaN == NaN


console.log( !true);

console.log( !false);

console.log( !!true);

console.log( !!false);

console.log( !!0);

console.log( !!-0);

console.log( !!1);

console.log( !!-1);

console.log( !!0.1);

console.log( !!"hello");

console.log( !!"");

console.log( !!'');

console.log( !!"false");

console.log( !!"0");


var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toUpperCase());

console.log(sample.toLowerCase());

console.log(sample + " students");

console.log(sample += " students");

console.log(sample.replace('students' , 'class'));

console.log(sample.indexOf("c"));

console.log(sample.indexOf("C"));

console.log(sample.substring(6, 12));

var mermaid = 3 * 3
var bBear = 5 * 3
var herc = 1 * 3

console.log(mermaid + bBear + herc);

var amz = 380 * 4
var goog = 400 * 6
var fb = 350 * 10

console.log(amz + goog + fb);