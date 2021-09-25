let result = 0;
let calculatorBuffer = '0';
let clickedOpeartor = null;
const screen = document.querySelector('.screen');

function startCalculator() {
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        buttonClick(event.target.innerHTML);
    });
}

function buttonClick(targetButton) {
    if(isNaN(targetButton)) {
        symbolClick(targetButton);
    }
    else {
        numberClick(targetButton);
    }
}

function symbolClick(targetButton) {
    if(targetButton === '←') {
        if(clickedOpeartor === '='){
            return;
        }
        else if(calculatorBuffer.length === 1) {
            calculatorBuffer = '0';
            calculatorScreen(calculatorBuffer);
        }
        else {
            calculatorBuffer = calculatorBuffer.substr(0, calculatorBuffer.length - 1);
            calculatorScreen(calculatorBuffer);
        }
    }
    else if(targetButton === 'C') {
        calculatorBuffer = '0';
        result = 0;
        clickedOpeartor = null;
        calculatorScreen(calculatorBuffer);
    }
    else if(targetButton === '=' && clickedOpeartor !== null) {
        completeCalculation(+calculatorBuffer);
        calculatorBuffer = +result;
        result = 0;
        calculatorScreen(calculatorBuffer);
    }
    else if(isArithmetic(targetButton) && calculatorBuffer !== '0') {
        doCalculation(targetButton);
    }
}

function numberClick(targetButton) {
    if(calculatorBuffer === '0') {
        calculatorBuffer = targetButton;
    }
    else {
        calculatorBuffer += targetButton;
    }
    calculatorScreen(calculatorBuffer);
}

function isArithmetic(targetButton){
    if(targetButton === '+' || targetButton === '-' || targetButton === '×' || targetButton === '÷') {
        return true;
    }
}

function completeCalculation(buffer) {
    if (clickedOpeartor === "+") {
        result += buffer;
      } else if (clickedOpeartor === "-") {
        result -= buffer;
      } else if (clickedOpeartor === "×") {
        result *= buffer;
      } else {
        result /= buffer;
      }
}

function doCalculation(targetButton) {
    if(result === 0) {
        result = +calculatorBuffer;
    }
    else {
        completeCalculation(+calculatorBuffer);
    }
    clickedOpeartor = targetButton;
    calculatorBuffer = "0";
    calculatorScreen(calculatorBuffer);
}

function calculatorScreen(number) {
    screen.innerHTML = number;
}

startCalculator();