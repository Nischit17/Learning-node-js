// Import the Express module to use its features for web server creation
const express = require("express");

// Create an instance of the Express application
const app = express();

/**
 * Middleware: requestTimestampLogger
 * This middleware function logs the timestamp, HTTP method, and requested URL
 * for every incoming request.
 * `next()` passes control to the next middleware or route handler.
 */
const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString(); // Get current timestamp in ISO format
  console.log(`${timeStamp} from ${req.method} to ${req.url}`); // Log details
  next(); // Proceed to the next middleware or route
};

// Register the middleware to run on all incoming requests
app.use(requestTimestampLogger);

// Route: GET request to the root path '/'
// Responds with "Homepage"
app.get("/", (req, res) => {
  res.send("Homepage");
});

// Route: GET request to '/about'
// Responds with "Aboutpage"
app.get("/about", (req, res) => {
  res.send("Aboutpage");
});

// Start the server and listen on port 3010
// Once running, it logs a confirmation message to the console
app.listen(3010, () => {
  console.log(`Server is running on PORT :3010`);
});
