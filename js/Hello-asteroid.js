var favoriteFood = "a chicken salad sandwich from Mcalisters!";

console.log("I love and cannot live without " + favoriteFood + "!!!!");

var holdUpWaitAMinute = "\n\tPlease \n\t\tHOLD \n\tTHE \n\t\tONIONS";

console.log("\n\tI love and cannot live without " + favoriteFood + holdUpWaitAMinute + "!!!");

let numStr = "7.99"; // string
let discount = .10; //number

let numAmount = parseFloat(numStr);
let discountedAmount = numAmount - (numAmount * discount)
console.log(discountedAmount.toFixed(2));