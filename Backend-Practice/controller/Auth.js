const Auth = require("../Modals/Auth");

class AuthControllers {
  Signup = (req, res, next) => {
    const result = Auth.SignUp(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  SignIn = (req, res, next) => {
    const result = Auth.SignIn(req);
    result
      .then((resp) => {
        // res.status(200).json(resp);
        res.status(200).json(resp);
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  }

  ForgetPassword = (req, res, next) => {
    const result = Auth.ForgetPassword(req);
    result
      .then((resp) => {
        // res.status(200).json(resp);
        res.status(200).json(resp);
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  }
}
module.exports = new AuthControllers();
