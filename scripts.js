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
        console.log(value, firstValue, operator, grandTotal);
    } // won't allow to add second comma in decimals
    else if (selected === "." && value.includes(".") === true) {
        dot.disabled = true;
    } //if delete pressed, won't delete initial 0
    else if (selected === "del" && value === "0") {
        value = "0";
        console.log(value);
    } //delete button functionality
    else if (selected === "del" && value !== "0") {
        value = value.substring(0, value.length - 1);
        console.log(value);
    } //percentage button functionality
    else if (selected === "%") {
        value = (value / 100).toString();
        console.log(value);
        console.log(`percentageValue: ${value}`);
    } //plus/minus button functionality
    else if (selected === "+/-") {
        if (Math.sign(parseFloat(value)) === 1) {
            value = (-Math.abs(value)).toString()
            console.log(value);
        } else if (Math.sign(parseFloat(value)) === -1) {
            value = Math.abs(value).toString();
            console.log(value);
        }
    }//if number or dot pressed, will concatenate selection with a global variable value
    else if (Number.isNaN(parseFloat(selected)) === false || selected === ".") {
        value += selected;
        console.log("-------------------");
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
        console.log("---------PLUS1----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "+" && operator !== undefined && grandTotal === undefined) {
        operator = add;
        console.log("---------change_to_Plus----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "+" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = add;
        console.log("---------PLUS2----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "-" && operator === undefined) {
        operator = deduct;
        firstValue = parseFloat(value);
        value = "0";
        console.log("---------DEDUCT1----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "-" && operator !== undefined && grandTotal === undefined) {
        operator = deduct;
        console.log("---------change_to_Deduct----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "-" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = deduct;
        console.log("---------DEDUCT2----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "÷" && operator === undefined) {
        operator = divide;
        firstValue = parseFloat(value);
        value = "0";
        console.log("---------DIVIDE1----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "÷" && operator !== undefined && grandTotal === undefined) {
        operator = divide;
        console.log("---------change_to_Divide----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "÷" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = divide;
        console.log("---------DIVIDE2----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "×" && operator === undefined) {
        operator = multiply;
        firstValue = parseFloat(value);
        value = "0";
        console.log("---------MULTIPLY1----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "×" && operator !== undefined && grandTotal === undefined) {
        operator = multiply;
        console.log("---------change_to_Multiply----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "×" && operator !== undefined) {
        lastValue = parseFloat(value);
        value = "0";
        grandTotal = operate(firstValue, lastValue, operator);
        firstValue = grandTotal;
        operator = multiply;
        console.log("---------MULTIPLY2----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "=" && operator === undefined) {
        grandTotal = value;
        console.log(grandTotal);
    } else if (selected === "=" && grandTotal === undefined) {
        lastValue = parseFloat(value);
        grandTotal = operate(firstValue, lastValue, operator);
        console.log("---------EQUALS2----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    } else if (selected === "=" && grandTotal !== undefined) {
        lastValue = parseFloat(value);
        grandTotal = operate(grandTotal, lastValue, operator);
        console.log("---------EQUALS3----------");
        console.log(`GRAND TOTAL: ${grandTotal}`);
        console.log(`value: ${value}`);
        console.log(`firstValue: ${firstValue}`);
        console.log(`lastValue ${lastValue}`);
        console.log(`operator: ${operator}`);
    }
}
