// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Set the view engine (Note: view engine is not specified here, so this line currently does nothing)
app.set("view engine", "ejs"); // You may need to specify a view engine like 'ejs', 'pug', etc.

// Middleware to parse incoming JSON data in request bodies
app.use(express.json()); // This is necessary for accessing req.body in POST requests

// Define a route handler for the root path ('/')
// When a GET request is made to '/', send 'Home Page' as the response
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Define a POST API endpoint at '/api/data'
// It responds with a JSON message containing the received data (req.body)
app.post("/api/data", (req, res) => {
  res.json({
    message: "Data Received",
    data: req.body,
  });
});

// Global error-handling middleware
// This will catch any errors that occur in the request handling pipeline
app.use((err, req, res, next) => {
  console.log(err.stack); // Log the error stack trace for debugging
  res.status(500).send("Something went wrong!"); // Respond with a 500 status code and message
});
