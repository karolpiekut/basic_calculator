/* calculator functions */

function multiply(...par) {
    return par.reduce(
        (acc, curr) => acc * curr
    );
}

function divide(...par) {
    return par.reduce(
        (acc, curr) => acc / curr
    );
}

function add(...par) {
    return par.reduce(
        (acc, curr) => acc + curr
    );
}

function deduct(...par) {
    return par.reduce(
        (acc, curr) => acc - curr
    );
}

//operate will take three arguments, first number, function, second number and limit the result to 9 digits
function operate(par1, par2, fun) {
    return fun(parseFloat(par1), parseFloat(par2));
}

// event listeners and query selectors

let buttons = document.querySelectorAll("button");
let dot = document.querySelector("#dot");
let runningTotalDisplay = document.querySelector(".runningTotal");
let currentOperationDisplay = document.querySelector(".currentOperation");
let currentValueDisplay = document.querySelector(".currentValue");

Array.from(buttons).forEach(button =>
    button.addEventListener("click", calculator));

//global variables

let value = "0";
let firstValue;
let lastValue;
let operator;
let grandTotal;
currentValueDisplay.innerText = 0;


function calculator(selectedButton) {
    let selected = selectedButton.target.value;
    // clear button functionality
    if (selected === "C") {
        value = "0";
        firstValue = "0";
        operator = undefined;
        grandTotal = undefined;
        currentValueDisplay.innerText = parseFloat(value);
        currentOperationDisplay.innerText = "";
        runningTotalDisplay.innerText = "";
    } // won't allow to add second comma in decimals
    else if (selected === "." && value.includes(".") === true) {
        dot.disabled = true;
    } //if delete pressed, won't delete initial 0
    else if (selected === "del" && value === "0") {
        value = "0";
    } //delete button functionality
    else if (selected === "del" && value !== "0") {
        value = value.substring(0, value.length - 1);
        //display logic
        if (value.length > 11) {
            currentValueDisplay.innerText = parseFloat(value).toExponential(6);
        } else {
            currentValueDisplay.innerText = parseFloat(value);
        }
    } //percentage button functionality
    else if (selected === "%") {
        value = (value / 100).toString();
        //display logic
        if (value.length > 11) {
            currentValueDisplay.innerText = parseFloat(value).toExponential(6);
        } else {
            currentValueDisplay.innerText = parseFloat(value);
        }
    } //plus/minus button functionality
    else if (selected === "+/-") {
        if (currentValueDisplay.innerText === "0") {
            value = "0";
        } else if (Math.sign(parseFloat(value)) === 1) {
            value = (-Math.abs(value)).toString()
        } else if (Math.sign(parseFloat(value)) === -1) {
            value = Math.abs(value).toString();
        }
        //display logic
        if (value.length > 11) {
            currentValueDisplay.innerText = parseFloat(value).toExponential(6);
        } else {
            currentValueDisplay.innerText = parseFloat(value);
        }
    }//if number or dot pressed, will concatenate selection with a global variable value
    else if (Number.isNaN(parseFloat(selected)) === false || selected === ".") {
        value += selected;
        //display logic
        if (value.length > 11) {
            currentValueDisplay.innerText = parseFloat(value).toExponential(6);
        } else if (value[1] === ".") {
            currentValueDisplay.innerText = value;
        } else if (parseFloat(value) === 0) {
            currentValueDisplay.innerText = 0;
        } else {
            currentValueDisplay.innerText = parseFloat(value);
        }

        console.log("---------VALUE----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    }
    //CALCULATOR FUNCTIONS BELOW
    else if (selected === "+" && operator === undefined) {
        operator = add;
        firstValue = parseFloat(value);
        value = "0";
        //display logic
        currentOperationDisplay.innerText = "+";
        currentValueDisplay.innerText = 0;
        if (firstValue.toString().length > 11) {
            runningTotalDisplay.innerText = firstValue.toExponential(11);
        } else {
            runningTotalDisplay.innerText = firstValue;
        }
    } else if (selected === "+" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = add;
        //display logic
        currentOperationDisplay.innerText = "+";
        currentValueDisplay.innerText = 0;
        if (grandTotal.toString().length > 11) {
            runningTotalDisplay.innerText = grandTotal.toExponential(11);
        } else if (grandTotal === Infinity) {
            runningTotalDisplay.innerText = grandTotal;
            currentOperationDisplay.innerText = "and Beyond!";
            currentValueDisplay.innerText = "c to reset";
        } else {
            runningTotalDisplay.innerText = grandTotal;
        }
    } else if (selected === "-" && operator === undefined) {
        operator = deduct;
        firstValue = parseFloat(value);
        value = "0";
        //display logic
        currentOperationDisplay.innerText = "-";
        currentValueDisplay.innerText = 0;
        if (firstValue.toString().length > 11) {
            runningTotalDisplay.innerText = firstValue.toExponential(11);
        } else {
            runningTotalDisplay.innerText = firstValue;
        }
    } else if (selected === "-" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = deduct;
        //display logic
        currentOperationDisplay.innerText = "-";
        currentValueDisplay.innerText = 0;
        if (grandTotal.toString().length > 11) {
            runningTotalDisplay.innerText = grandTotal.toExponential(11);
        } else if (grandTotal === Infinity) {
            runningTotalDisplay.innerText = grandTotal;
            currentOperationDisplay.innerText = "and Beyond!";
            currentValueDisplay.innerText = "c to reset";
        } else {
            runningTotalDisplay.innerText = grandTotal;
        }
    } else if (selected === "÷" && operator === undefined) {
        operator = divide;
        firstValue = parseFloat(value);
        value = "0";
        //display logic
        currentOperationDisplay.innerText = "÷";
        currentValueDisplay.innerText = 0;
        if (firstValue.toString().length > 11) {
            runningTotalDisplay.innerText = firstValue.toExponential(11);
        } else {
            runningTotalDisplay.innerText = firstValue;
        }
    } else if (selected === "÷" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = divide;
        //display logic
        currentOperationDisplay.innerText = "÷";
        currentValueDisplay.innerText = 0;
        if (grandTotal.toString().length > 11) {
            runningTotalDisplay.innerText = grandTotal.toExponential(11);
        } else if (grandTotal === Infinity) {
            runningTotalDisplay.innerText = grandTotal;
            currentOperationDisplay.innerText = "and Beyond!";
            currentValueDisplay.innerText = "c to reset";
        } else {
            runningTotalDisplay.innerText = grandTotal;
        }
    } else if (selected === "×" && operator === undefined) {
        operator = multiply;
        firstValue = parseFloat(value);
        value = "0";
        //display logic
        currentOperationDisplay.innerText = "×";
        currentValueDisplay.innerText = 0;
        if (firstValue.toString().length > 11) {
            runningTotalDisplay.innerText = firstValue.toExponential(11);
        } else {
            runningTotalDisplay.innerText = firstValue;
        }
    } else if (selected === "×" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = multiply;
        //display logic
        currentOperationDisplay.innerText = "×";
        currentValueDisplay.innerText = 0;
        if (grandTotal.toString().length > 11) {
            runningTotalDisplay.innerText = grandTotal.toExponential(11);
        } else if (grandTotal === Infinity) {
            runningTotalDisplay.innerText = grandTotal;
            currentOperationDisplay.innerText = "and Beyond!";
            currentValueDisplay.innerText = "c to reset";
        } else {
            runningTotalDisplay.innerText = grandTotal;
        }
    } else if (selected === "=" && operator === undefined) {
        grandTotal = value;
    } else if (selected === "=" && grandTotal === undefined) {
        lastValue = parseFloat(value);
        grandTotal = operate(firstValue, lastValue, operator);
        //display logic
        currentValueDisplay.innerText = 0;
        if (grandTotal.toString().length > 11) {
            runningTotalDisplay.innerText = grandTotal.toExponential(11);
        } else if (grandTotal === Infinity) {
            runningTotalDisplay.innerText = grandTotal;
            currentOperationDisplay.innerText = "and Beyond!";
            currentValueDisplay.innerText = "c to reset";
        } else {
            runningTotalDisplay.innerText = grandTotal;
        }
        value = "0"
    } else if (selected === "=" && grandTotal !== undefined) {
        lastValue = parseFloat(value);
        grandTotal = operate(grandTotal, lastValue, operator);
        //display logic
        if (lastValue.toString().length > 11) {
            currentValueDisplay.innerText = lastValue.toExponential(6);
        } else {
            currentValueDisplay.innerText = lastValue;
        }
        if (grandTotal.toString().length > 11) {
            runningTotalDisplay.innerText = grandTotal.toExponential(11);
        } else if (grandTotal === Infinity) {
            runningTotalDisplay.innerText = grandTotal;
            currentOperationDisplay.innerText = "and Beyond!";
            currentValueDisplay.innerText = "c to reset";
        } else {
            runningTotalDisplay.innerText = grandTotal;
        }

    }
}
