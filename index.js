const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display-text')


let first = ''
let second = ''
let op = ''
let isTypingSecond = false


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const val = e.target.innerText

        if(/^\d$/.test(val)){
            if(!op){
                first += val
                display.textContent = first
            } else {
                second += val
                display.textContent = second
            }
        }


        if("+-*/".includes(val)) {
            if(!first){
                return
            }

            if(!second){
                op = val
            }

            isTypingSecond = true
        }
        
        if(val === "="){
            if(first && op && second){
                const result = operate(op,Number(first),Number(second))
                display.textContent = result
                first = String(result);
                second = "";
                op = "";
                isTypingSecond = false;
            }

            return
        }

        if (val.toLowerCase() === "c") {
            first = second = op = "";
            isTypingSecond = false;
            display.textContent = "0";
            return;
        }

        console.log(first,second,op)

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


