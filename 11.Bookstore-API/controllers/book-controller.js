// Import the Book model
const Book = require("../models/book");

/**
 * Get all books from the database
 */
const getAllBooks = async (req, res) => {
  try {
    // Fetch all books using Mongoose's find() method
    const allBooks = await Book.find({});

    // If books are found, send a success response with data
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books fetched successfully!",
        data: allBooks,
      });
    } else {
      // If no books found, send 404 response
      res.status(404).json({
        success: false,
        message: "Books not found, please add books to see list of all books!",
      });
    }
  } catch (error) {
    console.log(error);
    // Handle server errors
    res.status(500).json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
};

/**
 * Get a single book by its ID
 */
const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;

    // Find the book by ID
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    // If no book is found with the given ID
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book with the current ID is not found!",
      });
    }

    // Send success response with book details
    res.status(200).json({
      success: true,
      message: "Got single book by ID",
      data: bookDetailsByID,
    });
  } catch (error) {
    console.log(error);
    // Handle server errors
    res.status(500).json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
};

/**
 * Add a new book to the database
 */
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;

    // Create a new book entry using the data from request body
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newlyCreatedBook) {
      // Send success response after creation
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    // Handle server errors or validation failures
    res.status(500).json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
};

/**
 * Update an existing book by ID
 */
const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookID = req.params.id;

    // Find the book by ID and update it with the new data
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updatedBookFormData,
      { new: true } // Return the updated document
    );

    // If no book is found to update
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    // Send success response with updated book data
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.log(error);
    // Handle server errors
    res.status(500).json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
};

/**
 * Delete a book by ID
 */
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;

    // Find the book by ID and delete it
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    // If no book found to delete
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    // Send success response with deleted book info
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    console.log(error);
    // Handle server errors
    res.status(500).json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
};

// Export all controller functions
module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
