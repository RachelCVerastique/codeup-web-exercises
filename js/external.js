//console.log("hello from external JavaScript");

//alert("Well to my Website!");

//var userInput = prompt('What is your favorite color?');
//console.log(alert('Awesome! ' + userInput + ' is my favorite color too!'));

//---------------------------------------------------------------------------------------------------------------------

// var mermaidInput = parseInt(prompt('How many days did you rent little mermaid for?'));
// var bBearInput = parseInt(prompt('How many days did you rent brother bear for?'));
// var hercInput = parseInt(prompt('how many days did you rent hercules for?'));
// var rentCharge = 3;
// var rentCost = (mermaidInput + bBearInput + hercInput) * rentCharge;
//
//
// var confirmed = confirm("Your total for your rentals is $" + (rentCost));
//
// console.log(confirmed)

//----------------------------------------------------------------------------------------------------------------------

// var amzInputHrs = parseInt(prompt('How many hours did you work for Amazon?'))
// var googInputHrs = parseInt(prompt('How many hours did you work for Google?'))
// var fbInputHrs = parseInt(prompt('How many hours did you work for FaceBook?'))
// var amzRt = 380, googRt = 400, fbRt = 350
//
//
// var total = ((amzRt * amzInputHrs) + (googRt * googInputHrs) +  (fbRt * fbInputHrs))
// var confirmPay = confirm("You will get paid $" + total)
// console.log(total);

//----------------------------------------------------------------------------------------------------------------------

var timeInput =prompt( 'This course is at 10 a.m. , is there a schedule conflict present?');
var studentsEnrolled = 17

 if (timeInput.includes("No")) {
     var studentInput = parseInt(prompt('Enter number of enrolling students.'))
     // alert('Move on to further determine enrollment eligibility.');
 } else {
     (alert('Schedule conflict present ineligible to enroll'));
 }
 if (studentInput + studentsEnrolled < 22) {
     alert('Student(s) enrollment successful!');
} else { alert('ineligible for enrollment at this time.')}








