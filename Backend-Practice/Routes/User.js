const express = require("express");
const UserController = require("../controller/User");
const { AuthenticateToken } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.get("/getProfile", AuthenticateToken, UserController.GetProfile);
router.put("/updateProfile", AuthenticateToken, UserController.UpdateProfile);

module.exports = router;
