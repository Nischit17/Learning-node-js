const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register controller
const registerUser = async (req, res) => {
  try {
    // extract user info from our req body
    const { username, email, password, role } = req.body;

    // Check if user is already registerd in our database
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User is already exists either with same username or email, please try with different username or email",
      });
    }

    // hash the password of user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user and save in database
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    } else {
      res.status(400).json({
        success: true,
        message: "User registration failed",
      });
    }
  } catch (error) {
    console.log(error);
    res.send(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

// Login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // find if the current user is exist in database or not
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exists",
      });
    }

    // If the password is correct or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // create user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      success: true,
      message: "Logged In successfull",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
