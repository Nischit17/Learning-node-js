// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Create a new HTTP server instance
const server = http.createServer((req, res) => {
  // Log the incoming request object (for debugging purposes)
  console.log(req, "req");

  // Set the HTTP status code to 200 (OK) and the Content-Type to plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body and end the response
  res.end("Hello from node.js server using HTTP module");
});

// Define the port number the server will listen on
const PORT = 3010;

// Start the server and listen for incoming requests on the specified port
server.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is now running on PORT ${PORT}`);
});
