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
let runningTotal = document.querySelector(".runningTotal");
let currentOperation = document.querySelector(".currentOperation");
let currentValue = document.querySelector(".currentValue");

Array.from(buttons).forEach(button =>
    button.addEventListener("click", calculator));

//global variables

let input = "0";
let valuesArr = [];
currentValue.innerText = 0;


function calculator(selectedButton) {
    let selected = selectedButton.target.value;
    //if number or dot button selected, will concatenate selection (type string) with a global variable input (will start with 0)
    if (selected === "." && input.includes(".") === true) {
        document.querySelector("#dot").disabled = true;
    } else if (Number.isNaN(parseFloat(selected)) === false || selected === ".") {
        input += selected;
    } else if (selected !== "=") { //if function button selected, push first value into array
        valuesArr.push(parseFloat(input)); //push first value into array
        input = 0; //sets input back to 0
        console.log(`valuesArr: ${valuesArr}`);




        //push function button into valuesArr





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
        }
        console.log(`valuesArr: ${valuesArr}`);
    } else if (selected === "CE/C") { //reset calculator
        input = 0;
        valuesArr = [];
    }







}

/*




    //need logic when equals will only execute if valuesArr.length === 2;

    if (select === "=") {
        valuesArr.push(parseFloat(input));
        evaluation = operate(valuesArr[0], valuesArr[1], valuesArr[2]);
        valuesArr = [];
        valuesArr.push(evaluation);
        input = 0;
    }



    //display logic
    if (input === 0) {
        screen.innerText = input; //display value when 0
    } else if (input.length > 9) {
        let displayNumberLong = parseFloat(input).toExponential();

        screen.innerText = parseFloat(input).toExponential(6);
    } else {
        screen.innerText = parseFloat(input); //display value without a leading 0
    }
}


*/



