// Import the built-in 'events' module in Node.js
const EventEmitter = require("events");

// Create a new instance of EventEmitter
const myFirstEmitter = new EventEmitter();

// Register (attach) a listener for the "Greet" event
// This function will be called whenever the "Greet" event is emitted
myFirstEmitter.on("Greet", (name) => {
  console.log(`Hello ${name}`); // Output a greeting with the provided name
});

// Emit (trigger) the "Greet" event and pass a name as the argument
// This will invoke the above listener with "Nischit D S" as the value of 'name'
myFirstEmitter.emit("Greet", "Nischit D S");
