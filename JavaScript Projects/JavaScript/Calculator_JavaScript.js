// object to keep track of values
const Calculator = {
    // displays 0 on screen
    Display_Value: '0',
    // holds the first operand for any expressions
    First_Operand: null,
    // checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // holds the operator
    operator: null,
};

// modifies values each time a button punched
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // check to see if Wait_Second_Operand is true and set
    // Display_Value set to key pressed
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrite Display_Value if PT value is 0 otherwise it adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
// decimal points
function Input_Decimal(dot) {
    // ensures that accidental clicking of the decimal point wont cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // if the Display Value does not contain a decimal point add one
        Calculator.Display_Value += dot;
    }
}


// handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // when operator key is pressed, convert the current displayed number and stuff in
    // Calculator.First_Operand if it don't exist
    const Value_of_Input = parseFloat(Display_Value);
    // check operator exists and Wait_Second_Operand is true
    //then update the operator and exit
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {     //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is done for the operator
        //in the Perform_Calculation object, function that matches operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        // remove trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand
    // console.log(Second_Operand);
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// update screen with contents of Display value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is object that represents the element clicked
    console.log("Update Display function");  //debug
    const { target } = event;
    // if element clicked is not button, exit
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        console.log("Handle operator ...");  //debug
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // AC clears numbers from calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})
