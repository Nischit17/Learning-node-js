// Import the EventEmitter class from the 'events' module
const EventEmitter = require("events");

// Define a custom class that extends EventEmitter
class MyCustomEmitter extends EventEmitter {
  constructor() {
    super(); // Call the parent constructor
    this.greeting = "Hello"; // Set a default greeting
  }

  // A method that emits a 'greeting' event with a message
  greet(name) {
    // Emit a 'greeting' event with the composed message
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

// Create an instance of MyCustomEmitter (don't name it the same as the class!)
const emitter = new MyCustomEmitter();

// Listen for the 'greeting' event and handle it with a callback function
emitter.on("greeting", (message) => {
  console.log("Greeting event:", message); // Log the greeting message
});

// Trigger the greet method, which emits the 'greeting' event
emitter.greet("Nischit D S"); // Output: Greeting event: Hello, Nischit D S
