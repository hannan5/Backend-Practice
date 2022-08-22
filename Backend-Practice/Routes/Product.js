const express = require("express");
const ProductController = require("../controller/Product");
const { AuthenticateToken } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/addProducts", AuthenticateToken, ProductController.AddProducts);
router.get("/getProducts",  ProductController.GetProducts);
router.get("/getSingleProducts",  ProductController.GetSingleProduct);
router.post("/imageupload",  ProductController.ImageUpload);
module.exports = router;