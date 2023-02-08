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
let firstValue = "0";
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
        console.log(value);
    } else if (selected === "+") {
        firstValue = value;
        value = "0";
        operator = add;

        console.log(`firstValueAfterPlus: ${firstValue}`);
        console.log(`valueAfterPlus: ${value}`);
        console.log(`operatorAfterPlus: ${operator}`);
    } else if (selected === "-") {
        firstValue = value;
        value = "0";
        operator = deduct;

        console.log(`firstValueAfterminus: ${firstValue}`);
        console.log(`valueAfterminus: ${value}`);
        console.log(`operatorAfterminus: ${operator}`);
    } else if (selected === "÷") {
        firstValue = value;
        value = "0";
        operator = divide;
        console.log(`firstValueAfterdivide: ${firstValue}`);
        console.log(`valueAfterdivide: ${value}`);
        console.log(`operatorAfterdivide: ${operator}`);
    } else if (selected === "×") {
        firstValue = value;
        value = "0";
        operator = multiply;

        console.log(`firstValueAftermulti: ${firstValue}`);
        console.log(`valueAftermulit: ${value}`);
        console.log(`operatorAftermulti: ${operator}`);
    }

    else if (selected === "=" && grandTotal === undefined) {
        grandTotal = operate(firstValue, value, operator);
        console.log(`operator after equals: ${operator}`);
        console.log(`Grand Total After Equals: ${grandTotal}`);
        console.log(`value after equals: ${value}`);
        console.log(`calc value 1 after equals ${firstValue}`);
    } else if (selected === "=" && grandTotal !== undefined) {
        grandTotal = operate(grandTotal, value, operator);
        console.log(`more equals: ${grandTotal}`);
    }

}

//NEXT STEP ADD FUNCTIONALITY WHERE NEXT OPERATOR IS NOT EQUALS BUT DIVIDE PLUS ETC

    /*

        REPEATED EQUALS SHOULD RE-RUN LAST CALCULATION ADDING TO GRAND TOTAL

        pick a number once you are happy with the selection select operator
        operator to be stored in operator variable
        store value in firstValue variable
        set value to "0"
        if a different operator is chosen, overwrite operator existing operator, do not touch firstValue
        pick a number, once you are happy with the selection press equals,
        if you firstValue, operator and value are populated and another operator is selected, function from the operator
        variable should get executed as per equals
        if another operator is selected instead of equals, get firstValue populated with GrandTotal value and second
        selection to be populated with 
        this will call a function based on operator value
        this will populate grandTotal with the result


        and set value, calc value and operator to nil



        Your calculator should not evaluate more than a single pair of numbers at a time.
        Example: you press a number button (12), followed by an operator button (+), a second number button (7),
        and finally a second operator button (-). Your calculator should then do the following: first,
        evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19),
        and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

         */




        /*

    else if (selected !== "=" || selected !== "del") {
        value = 0; //sets value back to 0
    }


    if (selected === "+") {
        operator = add;
        console.log(value);
        console.log(`with plus: ${operator}`)
    }


//

}

         */


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



