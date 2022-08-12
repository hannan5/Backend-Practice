const User = require("../Schema/UserSchema");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { GenerateToken } = require("../middlewares/AuthMiddleware");
class Auth {
  SignUp = async (req) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { Name, Gender, Occupation, Phone, Email, Password } = req.body;
        const hashedPassword = bcrypt.hashSync(Password,12)
        if (Name && Gender && Occupation && Phone && Email && Password) {
          return User.findOne({ Email: req.body.Email })
            .then(async (res) => {
              if (res) {
                return reject({
                  status: 400,
                  message: "Email Address is Already Register",
                });
              } else {
                const newBody = {...req.body,Password:hashedPassword}
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
    const { Email,Password } = req.body;
    return new Promise(async (resolve, reject) => {
    if(Email && Password){
      return User.findOne({
        Email:req.body.Email,
      })
      .then(async(res)=>{
      if(res){
        const comparepassword = bcrypt.compareSync(req.body.Password,res.Password)
        const token = await GenerateToken(res._id)
        console.log(token)
        if(comparepassword){
            return resolve({ status: 200, res: res,token:token })
        }
        else{
            return reject({status: 403, res: "Invalid Password"})
        }
      }
      else{
        return reject({ status: 403, msg: "Enter Valid Email" })
      }
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    else{
        return reject({status: 403, res: "Please fill all fields"})
    }
    });
  };

  ForgetPassword = ((req,res,next)=>{
    
    return new Promise((resolve,reject)=>{
      return User.find({Email:req.body.Email})
      .then((res)=>{
        return resolve({ status: 200, res: res })
      })
      .catch((e)=>{
        console.log(e)
      })
    })

  })
}
module.exports = new Auth();