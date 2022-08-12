const express = require("express");
const { AuthenticateToken } = require("../middlewares/AuthMiddleware");
const CartController = require('../controller/Cart')
const router = express.Router();
router.post("/addCart", AuthenticateToken,  CartController.AddCarts);
router.get("/getCart", AuthenticateToken, CartController.GetCart);
router.delete("/deleteCart", AuthenticateToken, CartController.DeleteSingleCart);
router.delete("/EmptyCart", AuthenticateToken, CartController.EmptyCart);

module.exports = router;