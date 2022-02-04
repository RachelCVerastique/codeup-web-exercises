// var creditScore = 720;
// var cashOnHand = 4000;
//
// if ( (creditScore >= 680 && cashOnHand >= 4000)) {
//     console.log("you are approved for a loan");
// } else if (cashOnHand >= 10000) {
//     console.log("credit score is insufficient, 10k down is required down");
// } else {
//     console.log("we cannot approve you at this time")}
//
// function isFive(number) {
//     if (number === 5) {
//         return true;
//     } else { return false};
// }
//
// isFive(6)

// Make a function named isMultipleOfThree that takes in an
// input and returns a boolean indicating whether or not the input is a multiple of three.

// function isMultipleOfThree(num) {
//     return num % 3 === 0;
// }
//
// console.log(isMultipleOfThree(9))



// Write a function called convertLowHighToObject that takes in a string
// that represents the low and high temperature in this format '35, 42'
// (assuming low will always be the left value and high the right)
// and returns an object with the properties 'low' and 'high' with the values of those respective
// properties set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}


//     function convertLowHighToObject(string1, string2) {
//             if (parseInt(string1) < parseInt(string2)) {
//                 return 'low:' + string1 + ',' + 'high:' + string2;
//             } else if (parseInt(string2) < parseInt(string1))
//         return 'low:' + parseInt(string2) + ',' + 'high:' + parseInt(string1);
//     }
//
// console.log( convertLowHighToObject('87', '12'));

// actual solution
function convertLowHighToObject(lowHighStr) {
    let lowHighArr = lowHighStr.split(', ');
    return {
        low: parseInt(lowHighArr[0]),
        high: parseInt(lowHighStr[1])
    }
}

console.log(convertLowHighToObject('12', '54'));