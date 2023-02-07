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

function percentage(par1) {
    return par1 / 100;
}

//operate will take three arguments, first number, function, second number and limit the result to 9 digits
function operate(par1, fun, par2) {
    return fun(par1, par2);
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
let calcValue1 = "0";
let calcValue2 = "0";
let operator;
let grandTotal = "0"
currentValueDisplay.innerText = 0;


function calculator(selectedButton) {
    let selected = selectedButton.target.value;
    // clear button functionality
    if (selected === "C") {
        value = "0";
        calcValue1 = "0";
        calcValue2 = "0";
        operator = undefined;
        grandTotal = "0";
        console.log(value, calcValue1, calcValue2, operator, grandTotal);
    } // won't allow to add second comma in decimals
    else if (selected === "." && value.includes(".") === true) {
        dot.disabled = true;
    } //if delete pressed, won't delete initial 0
    else if (selected === "del" && value === "0") {
        value = "0";
    } //delete button functionality
    else if (selected === "del" && value !== "0") {
        value = value.substring(0, value.length - 1);
        console.log(value);
    } //percentage button functionality
    else if (selected === "%") {
        value = parseFloat(value) / 100;
        console.log(value);
        console.log(`percentageValue: ${value}`);
    } //plus/minus button functionality
        else if (selected === "+/-") {
            if (Math.sign(parseFloat(value)) === 1){
                value = (-Math.abs(value)).toString()
                console.log(value);
                console.log(typeof value);
            } else if (Math.sign(parseFloat(value)) === -1){
                value = Math.abs(value).toString();
                console.log(value);
                console.log(typeof value);
            }
    }



    //if number or dot pressed, will concatenate selection with a global variable value
    else if (Number.isNaN(parseFloat(selected)) === false || selected === ".") {
        value += selected;
        console.log(value);
    } else if (selected !== "=" || selected !== "del") {
        value = 0; //sets value back to 0
    }


    if (selected === "+") {
        operator = add;
        console.log(value);
        console.log(`with plus: ${operator}`)
    }


//

}


//HOW TO MAKE SURE THAT THE ARRAY IS GOING TO BE POPULATED IN THE RIGHT ORDER

//push function button into valuesArr
/*

    if (selected === "+") {
        valuesArr.push(add);
    } else if (selected === "-") {
        valuesArr.push(deduct);
    } else if (selected === "×") {
        valuesArr.push(multiply);
    } else if (selected === "÷") {
        valuesArr.push(divide);
    } else if (selected === "%") {
        valuesArr.push(percentage);
    } else if (selected === "c") { //reset calculator
        value = 0;
        valuesArr = [];
    }


}


if (value === 0) {
    currentValueDisplay.innerText = value; //display value when 0
} else if (value.length > 9) {
    let displayNumberLong = parseFloat(value).toExponential();

    currentValueDisplay.innerText = parseFloat(value).toExponential(6);
} else {
    currentValueDisplay.innerText = parseFloat(value); //display value without a leading 0
}

/*


    

    //need logic when equals will only execute if valuesArr.length === 2;

    if (select === "=") {
        valuesArr.push(parseFloat(value));
        evaluation = operate(valuesArr[0], valuesArr[1], valuesArr[2]);
        valuesArr = [];
        valuesArr.push(evaluation);
        value = 0;
    }



    //display logic

}


*/



