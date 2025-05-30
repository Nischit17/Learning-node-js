require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");

const app = express();

const PORT = process.env.PORT || 3010;

// Connect to our database
connectToDB();

// Middleware -> express.json()
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is now running on PORT : ${PORT}`);
});
