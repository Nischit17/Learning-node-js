// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Route: GET request to the root path '/'
// Responds with a simple welcome message
app.get("/", (req, res) => {
  res.send("Welcome to our Home Page");
});

// Route: GET request to '/products'
// Responds with a JSON array of product objects
app.get("/products", (req, res) => {
  // Sample product data
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  // Send the product list as a JSON response
  res.json(products);
});

// Route: GET request to '/products/:id'
// Retrieves a specific product based on the ID passed as a route parameter
app.get("/products/:id", (req, res) => {
  // Convert the route parameter to an integer
  const productId = parseInt(req.params.id);

  // Sample product data (can be moved to a global store or database in a real app)
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  // Find the product with the matching ID
  const getSingleProduct = products.find((product) => product.id === productId);

  // If product is found, return it as JSON
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    // If not found, send a 404 response
    res.status(404).send("Product not found!");
  }
});

// Define the port number for the server to listen on
const PORT = 3010;

// Start the server and listen on the defined port
// Logs a message to the console when the server is up and running
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
