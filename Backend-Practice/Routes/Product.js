const express = require("express");
const ProductController = require("../controller/Product");

const router = express.Router();

router.post("/addProducts", ProductController.AddProduct);

module.exports = router;