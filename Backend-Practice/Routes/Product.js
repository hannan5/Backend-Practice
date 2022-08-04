const express = require("express");
const ProductController = require("../controller/Product");

const router = express.Router();

router.post("/addProducts", ProductController.AddProducts);
router.get("/getProducts", ProductController.GetProducts);

module.exports = router;