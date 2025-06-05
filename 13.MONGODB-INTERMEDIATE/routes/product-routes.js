const express = require("express");
const router = express.Router();

const { insertSampleProducts } = require("../controllers/product-controller");
const { getProductStats } = require("../controllers/product-controller");

router.post("/add", insertSampleProducts);
router.get("/stats", getProductStats);

module.exports = router;
