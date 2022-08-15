const mongoose = require("mongoose");

const connectDB = (url) => {
  const connectionString = "";
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Database is Connect");
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connectDB;
