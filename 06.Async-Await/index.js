// --------------------- Delayed Greeting Example ---------------------

// A function that returns a Promise which resolves after a given delay in milliseconds
const delayFn = (time) => {
  return new Promise((resolve) => {
    // setTimeout triggers the 'resolve' function after 'time' ms
    setTimeout(resolve, time);
  });
};

// An async function that waits for 2 seconds before logging a name
const delayedGreet = async (name) => {
  // Pause execution for 2 seconds
  await delayFn(2000);

  // Log the name after the delay
  console.log(name);
};

// Call the delayed greeting function with a name
delayedGreet("Nischit D S");

// --------------------- Division with Error Handling ---------------------

// An async function that performs division and handles division-by-zero errors
const division = async (num1, num2) => {
  try {
    // If the denominator is zero, throw a custom error
    if (num2 === 0) {
      throw new Error("Cannot do it"); // Will be caught in the catch block
    }

    // If valid, return the result of the division
    return num1 / num2;
  } catch (error) {
    // Catch any errors that occur in the try block
    console.error("error", error); // Log the error
    return null; // Return null in case of an error
  }
};

// An async main function to test the division function
const mainFn = async () => {
  // Call division with valid input, logs: 5
  console.log(await division(10, 2));

  // Call division with zero denominator, logs error and then null
  console.log(await division(10, 0));
};

// Execute the main function
mainFn();
