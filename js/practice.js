// let myBool = true;
// let age = 22;
// let hasDriversLicense = true;
// let moneyInWallet= 10.00;
//
// // they must be at least 21 years old
// // And have their drivers license
// //And have at least 5 dollars
//
// let canGetADrink =
//     (age >= 21)
//     && (hasDriversLicense)
//     && (moneyInWallet >+ 5.00);
//
// console.log(canGetADrink);
//
//
// let didTheDishes = true;
// let vacuumed = false;
// let cleanedTheRoom = true;
//
// if (!cleanedTheRoom) {
//     console.log("why did i have kids")
// } else{
//     console.log("thank god we're making progress")
// }
//
// function addFive(num) {
//     return num + 5;
// }
//
// console.log(addFive(5))

//
// function isZero(num) {
//     return num === 0
// }
//
// console.log(isZero(0))
//

//
// function square(num) {
//     return num ** 2;
// }
//
// console.log(square(153))
//
// function analyzeColor(color) {
//      if (color === "black") {
//          return("Black berries are black");
//      } if (color === "red") {
//          return("Roses are red");
//      } if (color === "purple") {
//          return("Plums are purple");
//      } if (color === "orange") {
//          return("oranges are orange");
//      } return "I dont know anything about that color;
//
//      }
//
//  console.log(analyzeColor("purple"));


// Make a function named isOdd(number)

//function isOdd()




// Make a function named isEven(number)
// Make a function named identity(input) that returns the input exactly as provided.
//     Make a function named isFive(input)
// Make a function named addFive(input) that adds five to some input.



// Maths!
//     Write a function called add(num1, num2) which returns the sum of a and b

//     function add(num1, num2) {
//         return (num1 + num2);
//     }
//
// console.log(add(1, 2))



// Write a function named square(numToSqr) which takes in a number (numToSqr)
// and returns the number multiplied by itself


//     function square(numToSqr) {
//         return numToSqr ** 2;
//     }
//
// console.log(square(3))


// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.
//
// function sumOfSquares(a, b) {
//     var sqOne = square(a);
//     var sqTwo = square(b);
//     return add(sqOne, sqTwo);
// }
//
// console.log(sumOfSquares(2, 3))

//
// instructors example
//     function sumOfSquares(a,b){
//     return add(square(a), square(b));
// }
//
// console.log(sumOfSquares(3, 2));
//

// FIZZ-BUZZZZZZZ
// Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"
// Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?

//
//     function getFizzBuzz(startingNum) {
//         if (startingNum % 3 === 0 && startingNum % 5 === 0) {
//             return "Fizz Buzz";
//         } else if (startingNum % 5 === 0) {
//             console.log("Buzz");
//         } else if (startingNum % 3 === 0) {
//             console.log("Fizz");
//         }
//     }
// console.log(getFizzBuzz(9))



// getPaswordInput
// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file


//     function getPassword() {
//         var correctPassword = "banana";
//         var userInput = prompt("Enter password");
//
//         while(userInput !== correctPassword) {
//             alert("Incorrect password, Try again!");
//             userInput = prompt("Enter password");
//         }
//         alert("Correct password!");
//     }
//
// getPassword();


// getMeaningOfLife
// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
//     While the counter is not equivalent to the meaningfulNum, continue the loop.
//     Once that condition is broken (i.e., the loop’s test fails), console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
// Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum is a non-numeric?
//     Write some code to account for this case. How the function handles the situation is up to you!
//     Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"



    function getMeaningOfLife(meaningfulNum) {
        let counter = 0;
        meaningfulNum = parseInt(meaningfulNum);



        if (!isNaN(meaningfulNum)) {
            while( counter !== meaningfulNum) {
                counter++;
        }
            console.log("The meaning of life, the universe, and everything is " + counter);

            if(counter === 42) {
                console.log("Did you bring your towel?")
            }
        }

    }

getMeaningOfLife(-42);







