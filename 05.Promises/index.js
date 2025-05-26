// A function that returns a Promise which resolves after a given delay
const delayFn = (time) => {
  return new Promise((resolve) => {
    // setTimeout is used to wait for 'time' milliseconds before resolving the promise
    setTimeout(resolve, time);
  });
};

console.log("Promise starts");

// Call delayFn with 2000 milliseconds (2 seconds) delay
// After 2 seconds, the .then() callback will execute
delayFn(2000).then(() => {
  console.log("After 2 seconds promise is resolved");
});

console.log("Promise ends"); // This logs immediately after delayFn is called (non-blocking behavior)

// -------------------- Divide Function with Promises --------------------

// A function that returns a Promise which either resolves with the result of division
// or rejects with an error if division by zero is attempted
const divideFn = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      // If denominator is 0, reject the Promise with an error message
      reject("Cannot divide by zero");
    } else {
      // Otherwise, resolve the Promise with the division result
      resolve(num1 / num2);
    }
  });
};

// Using divideFn with valid numbers (10 divided by 5)
divideFn(10, 5)
  .then((res) => {
    // This block runs if the Promise resolves successfully
    console.log(res); // Expected output: 2
  })
  .catch((err) => {
    // This block runs if the Promise is rejected (e.g., division by 0)
    console.log(err, "err");
  });
