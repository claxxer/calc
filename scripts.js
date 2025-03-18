let currentInput = "";

// Function to append numbers to the display
function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
  if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += operator;
    document.getElementById('display').value = currentInput;
  }
}

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  document.getElementById('display').value = currentInput;
}

// Function to calculate the result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (error) {
    currentInput = "Error";
    document.getElementById('display').value = currentInput;
    setTimeout(clearDisplay, 1500);  // Clear after 1.5 seconds
  }
}
