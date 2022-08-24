const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { response, request } = require("express");
const User = require("./Schema/UserSchema");
const Firebase = require("./Storage/FirebaseStorage");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
const {format} = require('util')
dotenv.config();

class GlobalFunction {
  Sendmail = ({ code, res }) => {
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

  UploadImage = (req) => {
    return new Promise((resolve, reject) => {
      if (!req.file) {
        reject({ msg: "Image not found" });
      } else {
        const newFileName = `${req.query.id}/${req.file.originalname}`;
        const blob = Firebase.bucket.file(newFileName);

        const filetoupload = req.file.originalname;
        const blobWriter = blob.createWriteStream({
          metadata: {
            metadata: {
              contentType: req.file.mimetype,
              firebaseStorageDownloadTokens: uuid,
            },
          },
        });
        // resolve(blob)
        blobWriter.on("error", (err) => {
          return reject({ msg: err });
        });

        blobWriter.on("finish", () => {
          const url = format(
            `https://firebasestorage.googleapis.com/v0/b/${Firebase.bucket.name}/o/${req.query.id}%2F${filetoupload}?alt=media&token=${uuid}`
          );
          return resolve(url);
        });
        blobWriter.end(req.file.buffer);
      }
    });
  };
}
module.exports = new GlobalFunction();
