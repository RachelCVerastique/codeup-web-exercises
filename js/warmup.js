var creditScore = 720;
var cashOnHand = 4000;

if ( (creditScore >= 680 && cashOnHand >= 4000)) {
    console.log("you are approved for a loan");
} else if (cashOnHand >= 10000) {
    console.log("credit score is insufficient, 10k down is required down");
} else {
    console.log("we cannot approve you at this time")}