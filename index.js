const buttons = document.querySelectorAll('.btn')
const display = document.querySelector('.display-text')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.innerText = e.target.innerText
    })
})


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


