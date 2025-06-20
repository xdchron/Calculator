const display = document.getElementById('display');

function isOperator(char) { // Check if the character is a valid operator
    return ['+', '-', '*', '/'].includes(char);
}

function appendToDisplay(value) { // Append a value to the display
    const lastChar = display.value.slice(-1); 

    if (isOperator(value)) {
        // Prevent two operators in a row or operator at the start
        if (display.value === '' || isOperator(lastChar)) {
            return;
        }
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

