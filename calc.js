function calculate(a, b, operation) {
    return new Promise((resolve, reject) => {
      if (isNaN(a) || isNaN(b)) {
        reject("Please enter valid numbers.");
      } else {
        switch (operation) {
          case "+":
            resolve(a + b);
            break;
          case "-":
            resolve(a - b);
            break;
          case "*":
            resolve(a * b);
            break;
          case "/":
            if (b === 0) {
              reject("Division by zero is not allowed.");
            } else {
              resolve(a / b);
            }
            break;
          default:
            reject("Invalid operation. Please use +, -, *, or /.");
        }
      }
    });
  }
  
  // Example usage:
  calculate(10, 12, "*")
    .then(result => {
      console.log(`Result: ${result}`);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
  
  calculate(10, 0, "/")
    .then(result => {
      console.log(`Result: ${result}`);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
  