let num1 = Number(prompt('Enter Number 1: '))
let operator = prompt('Operator: (+, -, /, *) ')
let num2 = Number(prompt('Enter Number 2: '))

let result = (num1, num2) => {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        return num1 / num2
    }
     else {
        return `Invalid input!!`
    }
}


alert(`${num1} ${operator} ${num2} = ${result(num1, num2)}`);