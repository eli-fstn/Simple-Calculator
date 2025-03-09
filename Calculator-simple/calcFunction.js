let displayValue;
const display = document.getElementById("output");

function updateDisplay() {
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = ' ';
    updateDisplay();
}

function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}
function calculate() {
    document.getElementById("output").textContent = "I miss you";
}