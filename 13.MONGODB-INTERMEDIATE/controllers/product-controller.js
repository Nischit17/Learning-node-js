const Product = require("../models/Product");

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      // stage-1
      {
        $match: {
          inStock: true,
          price: {
            $gte: 100,
          },
        },
      },

      // stage-2 : group documents
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const insertSampleProducts = async (req, res) => {
  try {
    const sampleProduct = [
      {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["gadget", "computer", "accessory"],
      },
      {
        name: "Yoga Mat",
        category: "Fitness",
        price: 1299,
        inStock: true,
        tags: ["exercise", "wellness", "gym"],
      },
      {
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 2499,
        inStock: false,
        tags: ["audio", "portable", "music"],
      },
      {
        name: "Cotton T-shirt",
        category: "Apparel",
        price: 499,
        inStock: true,
        tags: ["clothing", "casual", "summer"],
      },
      {
        name: "Ceramic Mug",
        category: "Home & Kitchen",
        price: 299,
        inStock: false,
        tags: ["kitchen", "drinkware", "coffee"],
      },
    ];

    const result = await Product.insertMany(sampleProduct);

    res.status(201).json({
      success: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats };
