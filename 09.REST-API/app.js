// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Sample in-memory book data
let books = [
  {
    id: "1",
    title: "Book 1",
  },
  {
    id: "2",
    title: "Book 2",
  },
];

// Root route - returns a welcome message
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore API",
  });
});

// GET /get - returns the list of all books
app.get("/get", (req, res) => {
  res.json(books);
});

// GET /get/:id - returns a specific book by ID
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with a different bookId",
    });
  }
});

// POST /add - adds a new book to the collection
app.post("/add", (req, res) => {
  const { title } = req.body;

  // Validate title
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newBook = {
    id: (books.length + 1).toString(), // Ensure ID is a string
    title,
  };

  books.push(newBook);

  res.status(200).json({
    data: newBook,
    message: "New book added successfully!",
  });
});

// PUT /update/:id - updates the title of a specific book
app.put("/update/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);

  if (!req.body || !req.body.title) {
    return res.status(400).json({
      message: "Please provide a valid 'title' in the request body",
    });
  }

  if (book) {
    book.title = req.body.title;

    res.status(200).json({
      data: book,
      message: `Book with ID ${req.params.id} updated successfully`,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

// DELETE /delete/:id - deletes a specific book by ID
app.delete("/delete/:id", (req, res) => {
  const index = books.findIndex((item) => item.id === req.params.id);

  if (index !== -1) {
    const removedBook = books.splice(index, 1)[0];

    res.status(200).json({
      data: removedBook,
      message: `Book with ID ${req.params.id} deleted successfully`,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

// Start the server and listen on port 3010
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
