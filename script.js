// Global variable to store the current expression
let currentInput = "";

// Function to append numbers or operators to the display
function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
  // Prevent adding more than one operator consecutively
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
    // Use eval to evaluate the expression
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (error) {
    // In case of an error, reset the display
    currentInput = "Error";
    document.getElementById('display').value = currentInput;
    setTimeout(clearDisplay, 1500);  // Clear the display after 1.5 seconds
  }
}
