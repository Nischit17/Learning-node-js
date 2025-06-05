require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const productRoutes = require("./routes/product-routes");

const app = express();

// Connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb connected successfully"))
  .catch((err) => console.log(err));

// use middlewares
app.use(express.json());

app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is now running on PORT ${process.env.PORT}`);
});
