const express = require("express");
const AuthControllers = require("../controller/Auth");

const router = express.Router();

router.post("/signUp", AuthControllers.Signup);
router.post("/signIn", AuthControllers.SignIn);
router.post("/forget", AuthControllers.ForgetPassword);
module.exports = router;