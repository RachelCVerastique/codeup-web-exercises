function getValidInput() {
    var input = prompt("enter an odd number between 1 and 50");
    while(input < 1 || input > 50) {
        input = prompt("enter an odd number between 1 and 50");
    }
    return input;
}








function skipANum(input) {
    for (let i = 1; i < 50; i++) {
        console.log(i)
    }
}
 skipANum(getValidInput());