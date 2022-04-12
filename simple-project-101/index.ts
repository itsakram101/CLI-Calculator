import {question} from 'readline-sync';

type Operator = '+' | '-' | '*' | '/' | '%';

function main() : void
{

    const firstStr: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');   
    const secondStr: string = question('Enter second number:\n');

    const isItValid: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if(isItValid)
    {
        const firstNumber: number = parseInt(firstStr);
        const secondNumber: number = parseInt(secondStr);

        const result = calculate(firstNumber, operator as Operator, secondNumber);
        console.log(result);

    }else
    {
        console.log('\ninvalid input was found\n');
        main();
    }
}
function isOperator(operator: string): boolean
{
    switch(operator)
    {
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
function isNumber(str: string): boolean
{
    const isItNum = parseInt(str);
    const isNum: boolean = !isNaN(isItNum);

    return isNum;
}
function calculate(firstNumber: number, operator: Operator, secondNumber: number)
    {
        switch(operator)
        {
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