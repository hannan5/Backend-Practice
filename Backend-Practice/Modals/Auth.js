const User = require("../Schema/UserSchema");
const bcrypt = require("bcrypt");
const { GenerateToken } = require("../middlewares/AuthMiddleware");
const GloabalFunctions = require("../GloabalFunctions");
const crypto = require("crypto");

class Auth {
  SignUp = async (req) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { Name, Gender, Occupation, Phone, Email, Password } = req.body;
        const hashedPassword = bcrypt.hashSync(Password, 12);
        if (Name && Gender && Occupation && Phone && Email && Password) {
          return User.findOne({ Email: req.body.Email })
            .then(async (res) => {
              if (res) {
                return reject({
                  status: 403,
                  message: "Email Address is Already Register",
                });
              } else {
                const newBody = { ...req.body, Password: hashedPassword };
                const data = await new User(newBody);
                data
                  .save()
                  .then((reso) => {
                    return resolve({ status: 200, message: reso });
                  })
                  .catch((er) => {
                    return reject({ status: 401, msg: er });
                  });
              }
            })
            .catch((e) => console.log(e));
        } else {
          return resolve({ status: 400, msg: "Please Input all Fields" });
        }
      } catch (e) {
        return reject({ status: 400, msg: e });
      }
    });
  };

  SignIn = async (req) => {
    const { Email, Password } = req.body;
    return new Promise(async (resolve, reject) => {
      if (Email && Password) {
        return User.findOne({
          Email: req.body.Email,
        })
          .then(async (res) => {
            if (res) {
              const comparepassword = bcrypt.compareSync(
                req.body.Password,
                res.Password
              );
              const token = await GenerateToken(res._id);
              // console.log(token);
              if (comparepassword) {
                return resolve({ status: 200, res: res, token: token });
              } else {
                return reject({ status: 403, res: "Invalid Password" });
              }
            } else {
              return reject({ status: 403, msg: "Enter Valid Email" });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        return reject({ status: 403, res: "Please fill all fields" });
      }
    });
  };

  ForgetPassword = (req) => {
    return new Promise((resolve, reject) => {
      const code = crypto.randomBytes(3).toString("hex");
      return User.findOne({ Email: req.body.Email })
        .then((res) => {
          if (res) {
            // console.log(res)
            res.Code = code;
            res.save().then((res) => {
              GloabalFunctions.Sendmail({ code, res });
            });
            return resolve({ status: 200, res: "Email is Send" });
          } else {
            return reject({ status: 403, res: "Email is not registerd" });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  VerifyOTP = (req) => {
    return new Promise((resolve, reject) => {
      User.find({ Email: req.body.Email })
        .then((res) => {
          if (req.body.Code == res[0].Code) {
            return resolve({ status: 200, msg: "Success" });
          } else {
            return reject({ status: 400, msg: "Code Not Matched" });
          }
        })
        .catch((e) => {
          return reject({ status: 400, msg: "Code Not Matched" });
        });
    });
  };

  NewPassword = (req) => {
    return new Promise((resolve, reject) => {
      if (req.body.Email && req.body.Password) {
        return User.findOne({ Email: req.body.Email })
          .then((res) => {
            const NewPass = bcrypt.hashSync(req.body.Password, 12);
            User.findByIdAndUpdate(res._id, { Password: NewPass })
              .then((res) => {
                return resolve({ status: 200, message: "Password is Change" });
              })
              .catch((e) => {
                return reject({
                  status: 400,
                  message: "Password is not changed",
                });
              });
          })
          .catch((e) => {
            return reject({ status: 403, message: "Email is Invalid" });
          });
      } else {
        return resolve({ status: 400, msg: "Please Input all Fields" });
      }
      // console.log(req.body.Password)
    });
  };
}
module.exports = new Auth();
