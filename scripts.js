// event listeners and query selectors

const buttons = document.querySelectorAll('button');
const dot = document.querySelector('#dot');
const runningTotalDisplay = document.querySelector('.runningTotal');
const currentOperationDisplay = document.querySelector('.currentOperation');
const currentValueDisplay = document.querySelector('.currentValue');

// global variables

let value = '0';
let firstValue;
let lastValue;
let operator;
let grandTotal;
runningTotalDisplay.innerText = '0';
currentValueDisplay.innerText = '0';

/* calculator functions */

function multiply(...par) {
  return par.reduce((acc, curr) => acc * curr);
}

function divide(...par) {
  return par.reduce((acc, curr) => acc / curr);
}

function add(...par) {
  return par.reduce((acc, curr) => acc + curr);
}

function deduct(...par) {
  return par.reduce((acc, curr) => acc - curr);
}

function reset() {
  value = '0';
  firstValue = undefined;
  operator = undefined;
  grandTotal = undefined;
}

function operate(par1, par2, fun) {
  if (par2 === 0 && fun === divide) {
    alert("you can't divide by 0!");
    reset();
  } else {
    return fun(parseFloat(par1), parseFloat(par2));
  }
}

function calculator(selectedButton) {
  const selected = selectedButton.target.value;
  // clear button functionality
  if (selected === 'C') {
    reset();
  } else if (selected === '.' && value.includes('.') === true) { // won't allow to add second comma in decimals
    dot.disabled = true;
  } else if (selected === 'del' && value === '0') { // if delete pressed, won't delete initial 0
    value = '0';
  } else if (selected === 'del' && value !== '0') { // delete button functionality
    value = value.substring(0, value.length - 1);
  } else if (selected === '%') { // percentage button functionality
    value = (value / 100).toString();
  } else if (selected === '+/-') { // plus/minus button functionality
    if (parseFloat(value) === 0) {
      value = '0';
    } else if (Math.sign(parseFloat(value)) === 1) {
      value = (-Math.abs(value)).toString();
    } else if (Math.sign(parseFloat(value)) === -1) {
      value = Math.abs(value).toString();
    }
  } else if (Number.isNaN(parseFloat(selected)) === false || selected === '.') { // if number or dot pressed, will concatenate selection with a global variable value
    value += selected;
  } else if (selected === '+' && operator === undefined) { // CALCULATOR FUNCTIONS BELOW
    operator = add;
    firstValue = parseFloat(value);
    value = '0';
  } else if (selected === '+' && operator !== undefined) {
    lastValue = parseFloat(value);
    value = '0';
    grandTotal = operate(firstValue, lastValue, operator);
    firstValue = grandTotal;
    operator = add;
  } else if (selected === '-' && operator === undefined) {
    operator = deduct;
    firstValue = parseFloat(value);
    value = '0';
  } else if (selected === '-' && operator !== undefined) {
    lastValue = parseFloat(value);
    value = '0';
    grandTotal = operate(firstValue, lastValue, operator);
    firstValue = grandTotal;
    operator = deduct;
  } else if (selected === '÷' && operator === undefined) {
    operator = divide;
    firstValue = parseFloat(value);
    value = '0';
  } else if (selected === '÷' && operator !== undefined) {
    lastValue = parseFloat(value);
    value = '0';
    grandTotal = operate(firstValue, lastValue, operator);
    firstValue = grandTotal;
    operator = divide;
  } else if (selected === '×' && operator === undefined) {
    operator = multiply;
    firstValue = parseFloat(value);
    value = '0';
  } else if (selected === '×' && operator !== undefined) {
    lastValue = parseFloat(value);
    value = '0';
    grandTotal = operate(firstValue, lastValue, operator);
    firstValue = grandTotal;
    operator = multiply;
  } else if (selected === '=' && operator === undefined) {
    grandTotal = value;
  } else if (selected === '=') {
    lastValue = parseFloat(value);
    grandTotal = operate(firstValue, lastValue, operator);
  } else if (Number.isNaN(parseFloat(grandTotal))) {
    grandTotal = 0;
  }

  // ----------runningTotalDisplay----------
  if (grandTotal === undefined && operator !== undefined) {
    runningTotalDisplay.innerText = firstValue;
  } else if (grandTotal === undefined) {
    runningTotalDisplay.innerText = '0';
  } else if (grandTotal.toString().length > 11) {
    runningTotalDisplay.innerText = grandTotal.toExponential(11);
  } else {
    runningTotalDisplay.innerText = grandTotal;
  }

  // ----------currentOperationDisplay----------
  if (operator === add) {
    currentOperationDisplay.innerText = '+';
  } else if (operator === deduct) {
    currentOperationDisplay.innerText = '-';
  } else if (operator === multiply) {
    currentOperationDisplay.innerText = '×';
  } else if (operator === divide) {
    currentOperationDisplay.innerText = '÷';
  } else {
    currentOperationDisplay.innerText = '';
  }
  // ----------currentValueDisplay----------

  if (value.length > 11) {
    currentValueDisplay.innerText = parseFloat(value).toExponential(6);
  } else if (parseFloat(value) === 0) {
    currentValueDisplay.innerText = 0;
  } else {
    currentValueDisplay.innerText = parseFloat(value);
  }
}

Array.from(buttons).forEach((button) => button.addEventListener('click', calculator));
