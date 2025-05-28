const mongoose = require("mongoose");

// Connect to MongoDB Atlas cluster
mongoose
  .connect(
    "mongodb+srv://nischit819:ImkhtA4FFyhiSyX4@cluster0.xccawlx.mongodb.net/"
  )
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection error:", err));

// Define a schema for the User collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }, // Automatically sets creation time
});

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

// Function to run various query examples
const runQueryExamples = async () => {
  try {
    // 1. Create a new user document
    const newUser = await User.create({
      name: "Updated User",
      email: "updateduser@gmail.com",
      age: 75, // Use a number, not a string
      isActive: true,
      tags: ["Developer"],
    });
    console.log("Created a new user:", newUser);

    // 2. Get all users from the database
    const allUsers = await User.find();
    console.log("All users:", allUsers);

    // 3. Get users where isActive is true
    const getActiveUsers = await User.find({ isActive: true });
    console.log("Active users:", getActiveUsers);

    // 4. Find the first user document with the name "John Doe"
    const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    console.log("John Doe user:", getJohnDoeUser);

    // 5. Find a user by their ObjectId
    const getLastCreatedUserByUserId = await User.findById(newUser._id);
    console.log("Last created user by ID:", getLastCreatedUserByUserId);

    // 6. Get only name and email fields, excluding the _id field
    const selectedFields = await User.find().select("name email -_id");
    console.log("Users with selected fields:", selectedFields);

    // 7. Get 5 users, skipping the first 1 (pagination)
    const limitedUsers = await User.find().limit(5).skip(1);
    console.log("Limited users (pagination):", limitedUsers);

    // 8. Sort users by age in ascending order (use -1 for descending)
    const sortedUsers = await User.find().sort({ age: 1 });
    console.log("Users sorted by age:", sortedUsers);

    // 9. Count the number of users where isActive is false
    const countInactiveUsers = await User.countDocuments({ isActive: false });
    console.log("Count of inactive users:", countInactiveUsers);

    // 10. Delete the newly created user by ID
    const deletedUser = await User.findByIdAndDelete(newUser._id);
    console.log("Deleted user:", deletedUser);

    // 11. Update a user by ID: set age to 100 and push "Updated" to tags
    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "Updated" },
      },
      { new: true } // Return the modified document
    );
    console.log("Updated user:", updateUser);
  } catch (error) {
    console.log("Error occurred during database operations:", error);
  } finally {
    // Always close the database connection when done
    await mongoose.connection.close();
  }
};

// Run all the query examples
runQueryExamples();

/*
Summary of Queries

| Operation                    | Description                           |
| ---------------------------- | ------------------------------------- |
| `User.create()`              | Adds a new document                   |
| `User.find()`                | Fetches all documents                 |
| `User.find({ ... })`         | Filters documents based on conditions |
| `User.findOne()`             | Returns the first matching document   |
| `User.findById()`            | Finds by ObjectId                     |
| `User.find().select()`       | Projects specific fields              |
| `User.find().limit().skip()` | Implements pagination                 |
| `User.find().sort()`         | Sorts documents                       |
| `User.countDocuments()`      | Counts matching documents             |
| `User.findByIdAndDelete()`   | Deletes a document                    |
| `User.findByIdAndUpdate()`   | Updates a document                    |

*/
