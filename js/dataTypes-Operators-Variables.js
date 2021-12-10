//Exercises
//1.
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

//2.


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

console.log(sample = sample + " students");

console.log(sample.replace('students' ,'class'));

console.log(sample.indexOf("c"));

console.log(sample.indexOf("C"));

console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));

//3.

var mermaid = 3 * 3
var bBear = 5 * 3
var herc = 1 * 3

console.log("Your total for your rentals is $" + (mermaid + bBear + herc));

var amzrt = 380
var googrt = 400
var fbrt = 350
var amzhr = 4
var googhr = 6
var fbhr =  10

var total = ( (amzrt * amzhr) + (googrt * googhr) +  (fbrt * fbhr))
console.log("You will get paid $" + total);




//student
var student = 1
var enrolled = 11
var course = student + enrolled
var doesNotConflict = false

if (course > 9 || !doesNotConflict) {
    message = "Enrolled.";}
    else {
        message = "Course closed, no open availability.";
}
console.log(message);

//product offer
var items = 8
var discount = .15
var price = 2

if ( items >= 2) {


//4.
var username = 'codeup';
var password = 'notastrongpassword';
var user = username.trim();
var pass = password.trim();

if ((pass.includes(username) && (pass.length > 5) && (user.length <=20))){
    console.log("Username / Password does not meet requirements")
} else {
    console.log("Account has been created")}}


