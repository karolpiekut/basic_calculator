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
let runningTotalDisplay = document.querySelector(".runningTotal");
let currentOperationDisplay = document.querySelector(".currentOperation");
let currentValueDisplay = document.querySelector(".currentValue");

Array.from(buttons).forEach(button =>
    button.addEventListener("click", calculator));

//global variables

let value = "0";
let valuesArr = [];
currentValueDisplay.innerText = 0;


function calculator(selectedButton) {
    let selected = selectedButton.target.value;
    // won't allow to add second comma in decimals
    if (selected === "." && value.includes(".") === true) {
        document.querySelector("#dot").disabled = true;
    } //won't remove 0 from the value
    else if (selected === "del" && value === "0") {
        value = "0";
    } //delete button will work
    else if (selected === "del" && value !== "0") {
        value = value.substring(0, value.length - 1);
    } //if number or dot pressed, will concatenate selection with a global variable value
    else if (Number.isNaN(parseFloat(selected)) === false || selected === ".") {
        value += selected;
        console.log(value);
    } else if (selected !== "=" || selected !== "del") { //if function button selected, push first value into array
        valuesArr.push(parseFloat(value)); //push first value into array
        value = 0; //sets value back to 0
        console.log(`valuesArr: ${valuesArr}`);
    }
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



