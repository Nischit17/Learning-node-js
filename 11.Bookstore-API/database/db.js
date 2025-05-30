// Import the Mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Define an asynchronous function to connect to the MongoDB database
const connectToDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URL);

    // Log success message if connection is successful
    console.log("MongoDB connected successfully!");
  } catch (error) {
    // Log an error message if connection fails
    console.log("MongoDB connection failed", error);

    // Exit the process with failure code (1) to indicate a fatal error
    process.exit(1);
  }
};

// Export the connectToDB function so it can be used in other parts of the application
module.exports = connectToDB;
