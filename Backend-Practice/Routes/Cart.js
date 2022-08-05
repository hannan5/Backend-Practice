const express = require("express");
const { AuthenticateToken } = require("../middlewares/AuthMiddleware");
const CartController = require('../controller/Cart')
const router = express.Router();
router.post("/addCart",  CartController.AddCarts);
router.get("/getCart",  CartController.GetCart);
module.exports = router;