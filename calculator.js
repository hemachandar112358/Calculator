let inputNum = [];
let calcArray = []
let outputNum = []
let numString;
let firResult = 0
let count;

const equalbtnclick = document.querySelector("#equals");
const operatorbtnplus = document.querySelector("#plus");
const operatorbtnminus = document.querySelector("#minus");
const operatorbtnmul = document.querySelector("#multiply");
const operatorbtndiv = document.querySelector("#divide");
const input = document.querySelector("#input");
const output = document.querySelector("#output")
const cleardisplay = document.querySelector("#clear")
const numberbtns = document.querySelectorAll(".buttons")

function add(a, b) {
    fResult = a + b;
    return fResult;
}
function subtract(a, b) {
    fResult = a - b;
    return fResult;
}
function multiply(a, b) {
    fResult = a * b;
    return fResult;
}
function divide(a, b) {
    if (b === 0) {
        alert("You messed up!!! can't divide with zero, Press clear button and perform new operations")
    }
    else {
        fResult = a / b;
    }
    return fResult;
}

function operate(operator, num1, num2) {

    switch (operator) {
        case "+":

            result = add(num1, num2);

            break;

        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            result = divide(num1, num2);

            break;
    }
    return result
}

equalbtnclick.addEventListener("click", function (event) {
    count++;
    if(isNaN(inputNum[inputNum.length-1])){
        
    }
    else{
    disableButtons();
    }
    resultCal();



    if (isNaN(firResult)) {
        firResult = "invalid operation!!!"
    }
    output.innerHTML = firResult;
})

numberbtns.forEach((numberbtns) => {
    count = 0;
    numberbtns.addEventListener("click", function (event) {

        if (inputNum.length == 0) {
            inputNum.push(event.target.id)
            calcArray.push(event.target.id)
        }
        else if (isNaN(inputNum[inputNum.length - 1])) {
            inputNum.push(event.target.id)
            calcArray.push(event.target.id)
        }
        else {
            num1 = inputNum[inputNum.length - 1];
            num1 += event.target.id;
            inputNum.pop();
            inputNum.push(num1);
            calcArray.pop()
            calcArray.push(num1)
        }
        input.textContent = calcArray.join("");

    })
})

operatorbtnplus.addEventListener("click", function (e) {
    enableButtons();
    inputNum.push('+');
    calcArray.push('+')
    input.textContent = calcArray.join("");
})

operatorbtnminus.addEventListener("click", function (e) {
    enableButtons();
    inputNum.push('-');
    calcArray.push('-')
    input.textContent = calcArray.join("");
})

operatorbtnmul.addEventListener("click", function (e) {
    enableButtons();
    inputNum.push('*');
    calcArray.push('*');
    input.textContent = calcArray.join("");

})

operatorbtndiv.addEventListener("click", function (e) {
    enableButtons();
    inputNum.push('/');
    calcArray.push('/')
    input.textContent = calcArray.join("");
})

cleardisplay.addEventListener("click", (e) => {
    enableButtons();
    input.textContent = '';
    output.innerHTML = '';
    inputNum = []
    calcArray = []
    firResult = 0;
})

function resultCal() {
    while (calcArray.length >= 3) {
        firResult = operate(calcArray[1], parseFloat(calcArray[0]), parseFloat(calcArray[2]))
        firResult = firResult.toFixed(2)
        calcArray.shift()
        calcArray.shift()
        calcArray.shift()
        calcArray.unshift(firResult)
    }
}

function truncateText() {


    if (inputNum.length > maxLength) {
        truncated = truncated.substr(0, maxLength) + '...';
    }
    return truncated;
}

function disableButtons() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    document.getElementById("0").disabled = true;
}

function enableButtons() {
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
    document.getElementById("0").disabled = false;
}