// Import the Mongoose library
const mongoose = require("mongoose");

// Define the schema for a Book
const BookSchema = new mongoose.Schema({
  // Title of the book
  title: {
    type: String, // Data type is String
    required: [true, "Please enter the book title!"], // Field is mandatory with a custom error message
    trim: true, // Trims whitespace from the beginning and end
    maxLength: [100, "Book title cannot exceed 100 characters"], // Maximum character limit with error message
  },

  // Author of the book
  author: {
    type: String, // Data type is String
    required: [true, "Please enter the author name!"], // Field is mandatory with a custom error message
    trim: true, // Trims whitespace from the beginning and end
  },

  // Publication year of the book
  year: {
    type: Number, // Data type is Number
    required: [true, "Publication year is required!"], // Field is mandatory with a custom error message
    min: [1000, "Year must be at least 1000"], // Minimum value check
    max: [new Date().getFullYear(), "Year cannot be in the future!"], // Maximum value is current year
  },

  // Date when the book entry was created (defaults to current date/time)
  createdAt: {
    type: Date, // Data type is Date
    default: Date.now, // Default value is the current date and time
  },
});

// Export the Book model based on the BookSchema
module.exports = mongoose.model("Book", BookSchema);
