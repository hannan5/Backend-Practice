const express = require("express");
const ProductController = require("../controller/Product");
const { AuthenticateToken } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/addProducts", AuthenticateToken, ProductController.AddProducts);
router.get("/getProducts",  ProductController.GetProducts);

module.exports = router;