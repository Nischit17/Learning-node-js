// Import express and the book controller methods
const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

// Create a new router instance
const router = express.Router();

/**
 * Routes related to book management
 */

// Route to fetch all books
// GET /api/books/get
router.get("/get", getAllBooks);

// Route to fetch a single book by its ID
// GET /api/books/get/:id
router.get("/get/:id", getSingleBookById);

// Route to add a new book
// POST /api/books/add
router.post("/add", addNewBook);

// Route to update an existing book by its ID
// PUT /api/books/update/:id
router.put("/update/:id", updateBook);

// Route to delete a book by its ID
// DELETE /api/books/delete/:id
router.delete("/delete/:id", deleteBook);

// Export the router to be used in the main app
module.exports = router;
