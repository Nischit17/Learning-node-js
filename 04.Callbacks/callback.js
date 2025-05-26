// Import the built-in 'fs' (File System) module for reading/writing files
const fs = require("fs");

// Define a function 'person' that takes a name and a callback function
const person = (name, callbackFn) => {
  // Print the name passed to the function
  console.log(`Hello from ${name}`);

  // Call the callback function passed as an argument
  callbackFn();
};

// Define a simple function 'address' that logs the address
const address = () => {
  console.log("India");
};

// Call the 'person' function, passing a name and the 'address' function as a callback
person("Nischit D S", address);

// Read the contents of a file named 'input.txt' asynchronously
fs.readFile("input.txt", "utf-8", (err, data) => {
  // If an error occurs during reading, log the error
  if (err) {
    console.log("Error reading file", err);
    return;
  }

  // If no error, log the contents of the file
  console.log(data);
});

/*
1. Callback Functions (Higher-Order Functions)

- The function person() accepts another function (callbackFn) as a parameter and executes it.

- address() is passed as a callback to person().

- This is an example of higher-order functions, where functions are treated as first-class citizens (can be passed around like variables).

2. Asynchronous Programming with Callbacks

- fs.readFile() is asynchronous, meaning it doesn't block the execution.

- It uses a callback function to handle the result of the file read operation.

- This is a common pattern in Node.js: non-blocking I/O using callbacks.
*/
