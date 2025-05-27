// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

/**
 * Custom middleware function that will run on every request.
 * Middleware functions have access to the request (req), response (res), and the next middleware in the stack.
 * This function simply logs a message and calls `next()` to pass control to the next middleware or route handler.
 */
const myFirstMiddleWare = (req, res, next) => {
  console.log("This first middleware will run on every request");
  next(); // Proceed to the next middleware or route handler
};

// Register the middleware with the app
// This middleware will be executed for every incoming request
app.use(myFirstMiddleWare);

// Define a route for the root path '/'
// Responds with "Homepage"
app.get("/", (req, res) => {
  res.send("Homepage");
});

// Define a route for '/about'
// Responds with "Aboutpage"
app.get("/about", (req, res) => {
  res.send("Aboutpage");
});

// Start the server and listen on port 3010
// Logs a message to the console when the server is running
app.listen(3010, () => {
  console.log(`Server is running on PORT :3010`);
});
