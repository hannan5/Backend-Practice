const express = require("express");
const ProductController = require("../controller/Product");
const { AuthenticateToken } = require("../middlewares/AuthMiddleware");
const multer = require('multer')
const upload = multer()

const router = express.Router();

router.post("/addProducts", AuthenticateToken,upload.single('file'), ProductController.AddProducts);
router.get("/getProducts",  ProductController.GetProducts);
router.get("/getSingleProducts",  ProductController.GetSingleProduct);
// router.post("/imageupload", upload.single('file'), ProductController.ImageUpload);
module.exports = router;