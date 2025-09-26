function add(x,y) {
    return x + y
}

function subtract(x,y) {
    return x - y
}

function  multiply(x,y) {
    return x * y
}

function divide(x,y) {
    return x / y
}

function operate(operator,a,b){
    switch(operator) {
    case '+':
        return add(a,b)
    case '-':
        return subtract(a,b)
    case '*':
        return multiply(a,b)
    case '/':
        return divide(a,b)
    default:
        console.log('Operator does not exist') 
    }
}

console.log(operate('+',1,3))