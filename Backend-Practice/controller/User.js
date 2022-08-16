const Users = require('../Modals/User')

class UserController {
    GetProfile = (req,res,next) =>{
        const result = Users.GetProfile(req);
        result
          .then((resp) => {
            res.status(200).json(resp);
          })
          .catch((e) => {
            console.log(e);
            res.status(400).json(e);
          })
    }
    UpdateProfile = (req,res,next) =>{
        const result = Users.UpdateProfile(req);
        result
          .then((resp) => {
            res.status(200).json(resp);
          })
          .catch((e) => {
            console.log(e);
            res.status(400).json(e);
          })
    }
}
module.exports = new UserController()