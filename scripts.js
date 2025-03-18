let currentInput = "";

// Function to append numbers to the display
function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
  resizeDisplay(); // Resize the input after appending a number
}

// Function to append operators to the display
function appendOperator(operator) {
  if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += operator;
    document.getElementById('display').value = currentInput;
    resizeDisplay(); // Resize the input after appending an operator
  }
}

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  document.getElementById('display').value = currentInput;
  resizeDisplay(); // Resize the input after clearing
}

// Function to calculate the result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
    resizeDisplay(); // Resize the input after calculation
  } catch (error) {
    currentInput = "Error";
    document.getElementById('display').value = currentInput;
    setTimeout(clearDisplay, 1500);  // Clear after 1.5 seconds
  }
}

// Function to resize the display input based on the length of the input
function resizeDisplay() {
  const display = document.getElementById('display');
  const length = display.value.length;
  
  // Dynamically adjust the width based on the input length
  // The width starts from 60px and increases by 10px per character, with a max width of 100% of the calculator container's width.
  display.style.width = `${Math.min(60 + length * 12, 320)}px`;
}
