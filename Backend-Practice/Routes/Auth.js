const express = require("express");
const AuthControllers = require("../controller/Auth");

const router = express.Router();

router.post("/signUp", AuthControllers.Signup);
router.post("/signIn", AuthControllers.SignIn);
router.post("/forget", AuthControllers.ForgetPassword);
router.post("/verify", AuthControllers.VerifyOtp);
router.post("/NewPass", AuthControllers.NewPassword);
module.exports = router;