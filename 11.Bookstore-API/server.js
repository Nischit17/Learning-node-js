// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Express framework
const express = require("express");

// Import the function to connect to the database
const connectToDB = require("./database/db");

// Import the book routes
const bookRoutes = require("./routes/book-routes");

// Initialize the Express application
const app = express();

// Define the port number from environment variables or use 8080 by default
const PORT = process.env.PORT || 8080;

// Connect to the database
connectToDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the book routes for any request that starts with /api/books
app.use("/api/books", bookRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is now running on PORT : ${PORT}`);
});
