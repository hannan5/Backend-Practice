const User = require("../Schema/UserSchema");

class Users {
<<<<<<< HEAD
    GetProfile = (req) => {
        return new Promise((resolve, reject) => {
            User.findOne({ _id: req.query.id })
                .then((res) => {
                    return resolve({
                        status: 200,
                        data: res,
                    });
                })
                .catch((e) => {
                    return reject({
                        status: 400,
                        message: e,
                    });
                })
        })
    }
    UpdateProfile = (req) => {
        return new Promise((resolve, reject) => {
            User.findByIdAndUpdate({ _id: req.query.id }, req.body, { new: true })
                .then((res) => {
                    if (res) {
                        return resolve({
                            status: 200,
                            data: res,
                        });
                    }
                })
                .catch((e) => {
                    return reject({
                        status: 400,
                        error: e,
                    });
                })
=======
  GetProfile = (req) => {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: req.query.id })
        .then((res) => {
          return resolve({
            status: 200,
            data: res,
          });
        })
        .catch((e) => {
          return reject({
            status: 400,
            message: e,
          });
        });
    });
  };
  UpdateProfile = (req) => {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate({ _id: req.query.id }, req.body, { new: true })
        .then((res) => {
          if (res) {
            return resolve({
              status: 200,
              data: res,
            });
          }
>>>>>>> d4175694a279e8ed1b85a94d63d3b077d325fcd6
        })
        .catch((e) => {
          return reject({
            status: 400,
            message: e,
          });
        });
    });
  };
}
module.exports = new Users();
