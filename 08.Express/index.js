// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a simple route handler for the root path ("/")
// When a GET request is made to "/", send "Hello World!" as the response
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define the port number on which the server will listen
const PORT = 3010;

// Start the server and listen on the specified port
// Once the server is running, log a message to the console
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
