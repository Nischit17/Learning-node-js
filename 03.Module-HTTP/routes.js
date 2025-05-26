// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Create a new HTTP server instance
const server = http.createServer((req, res) => {
  // Extract the requested URL path from the incoming request
  const url = req.url;

  // Routing logic based on the requested URL
  if (url === "/") {
    // If the request is for the root path, send the Home Page response
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set status and headers
    res.end("Home Page"); // Send response body
  } else if (url === "/projects") {
    // If the request is for the /projects path, send the Project Page response
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set status and headers
    res.end("Project Page"); // Send response body
  } else {
    // For any other path, return a 404 Not Found response
    res.writeHead(404, { "Content-Type": "text/plain" }); // Set status and headers
    res.end("404 Error"); // Send error message
  }
});

// Define the port number the server will listen on
const PORT = 3010;

// Start the server and begin listening on the specified port
server.listen(PORT, () => {
  // Log a message when the server starts successfully
  console.log(`Server is now running on PORT ${PORT}`);
});
