const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { response } = require("express");
const User = require("./Schema/UserSchema");
dotenv.config();

class GlobalFunction {
  Sendmail = ({ code,res }) => {
    // console.log(randomString1);
    // console.log(process.env.pass,'Email')
    const Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.pass,
      },
    });

    const options = {
      from: process.env.Email,
      to: "hannankhan7987@gmail.com",
      subject: "Forget Password",
      text: `Your Code is ${code}`,
    };
    Transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err, "err");
      } else {
        console.log(info.response);

      }
    });
  };
  Verify = (code, code1) => {
    
  };
}
module.exports = new GlobalFunction();