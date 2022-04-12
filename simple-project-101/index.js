"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    var isItValid = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isItValid) {
        var firstNumber = parseInt(firstStr);
        var secondNumber = parseInt(secondStr);
        var result = calculate(firstNumber, operator, secondNumber);
        console.log(result);
    }
    else {
        console.log('\ninvalid input was found\n');
        main();
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var isItNum = parseInt(str);
    var isNum = !isNaN(isItNum);
    return isNum;
}
function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case '%':
            return firstNumber % secondNumber;
        default:
            console.log('\ninvalid operator\n');
    }
}
main();
