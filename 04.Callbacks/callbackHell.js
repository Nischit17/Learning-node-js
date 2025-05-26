// Import the built-in 'fs' (File System) module to handle file operations
const fs = require("fs");

// Step 1: Read content from the input.txt file asynchronously
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    // If there's an error while reading the file, log it and stop further execution
    console.log("Error reading file", err);
    return;
  }

  // Step 2: Modify the file data — convert all text to uppercase
  const modifyFileData = data.toUpperCase();

  // Step 3: Write the modified content to a new file named output.txt
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      // If there's an error while writing to the file, log it and stop
      console.log("Error writing file", err);
      return;
    }

    console.log("Data written to the new file");

    // Step 4: Read the newly written output.txt file to verify its contents
    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        // Handle any error that occurs while reading output.txt
        console.log("Error reading file", err);
        return;
      }

      // Step 5: Print the content of output.txt to the console
      console.log(data);
    });
  });
});

/*
1. Asynchronous File Operations

- fs.readFile() and fs.writeFile() are non-blocking.

- They accept a callback function that's executed once the operation is complete.

2. Callback Nesting (Callback Hell)

- This style (callbacks within callbacks) is common in basic async handling but can get messy as complexity increases.

3. String Manipulation

- data.toUpperCase() converts the content to all uppercase characters.
*/
