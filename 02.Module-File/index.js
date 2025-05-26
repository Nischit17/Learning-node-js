// Import required modules
const fs = require("fs");
const path = require("path");

// =====================
// Synchronous Methods
// =====================

// 1. Create a folder named 'data' inside the current directory if it doesn't exist
const newFolder = path.join(__dirname, "data");
if (!fs.existsSync(newFolder)) {
  fs.mkdirSync(newFolder); // Synchronous folder creation
  console.log("New folder named 'data' is created");
}

// 2. Create a file named 'example.txt' inside the 'data' folder with some content
const newFile = path.join(newFolder, "example.txt");
fs.writeFileSync(newFile, "Hello from nodejs as in sync method"); // Synchronous file write
console.log("New sync file 'example.txt' created successfully");

// 3. Read the content of 'example.txt' synchronously
const readFileContent = fs.readFileSync(newFile, "utf-8");
console.log("Content of the file 'example.txt' is:", readFileContent);

// 4. Append a new line to 'example.txt' synchronously
fs.appendFileSync(newFile, "\nThis is a new line added to this file");
console.log("A new line has been appended to 'example.txt'");

// =====================
// Asynchronous Methods
// =====================

// 5. Create a file named 'asyncExample.txt' asynchronously and write some content to it
const asyncFilePath = path.join(newFolder, "asyncExample.txt");
fs.writeFile(asyncFilePath, "Hello from nodejs as in Async method", (err) => {
  if (err) throw err;
  console.log("New async file 'asyncExample.txt' created successfully");

  // 6. Read the content of 'asyncExample.txt' asynchronously
  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Content of 'asyncExample.txt' is:", data);

    // 7. Append a new line to 'asyncExample.txt' asynchronously
    fs.appendFile(
      asyncFilePath,
      "\nThis is a new line added to this file",
      (err) => {
        if (err) throw err;
        console.log("A new line has been appended to 'asyncExample.txt'");
      }
    );
  });
});
