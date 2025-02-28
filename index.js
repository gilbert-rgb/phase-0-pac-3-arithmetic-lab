// Define basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return NaN; // Handle division by zero
    }
    return a / b;
  }
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Define makeInt function to parse a number as an integer
  function makeInt(n) {
    const parsed = parseInt(n, 10); // Assumes base 10
    return isNaN(parsed) ? NaN : parsed;
  }
  
  // Define preserveDecimal function to parse as a floating point number
  function preserveDecimal(n) {
    const parsed = parseFloat(n);
    return isNaN(parsed) ? NaN : parsed;
  }
  