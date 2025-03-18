let currentInput = "";

// Function to append numbers or operators to the display
function appendNumber(number) {
  console.log("Appending number:", number); // Debugging line
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
  console.log("Appending operator:", operator); // Debugging line
  if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += operator;
    document.getElementById('display').value = currentInput;
  }
}

// Function to clear the display
function clearDisplay() {
  console.log("Clearing display..."); // Debugging line
  currentInput = "";
  document.getElementById('display').value = currentInput;
}

// Function to calculate the result
function calculateResult() {
  console.log("Calculating result..."); // Debugging line
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (error) {
    currentInput = "Error";
    document.getElementById('display').value = currentInput;
    setTimeout(clearDisplay, 1500);  // Clear after 1.5 seconds
  }
}
