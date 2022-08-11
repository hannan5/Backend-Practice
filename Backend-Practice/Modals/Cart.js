const Cart = require("../Schema/CartSchema");
class Carts {
  AddCart = (req) => {
    return new Promise(async (resolve, reject) => {
      Cart.findOne({ Product: req.body.Product }).then(async (res) => {
        if (res) {
          // console.log(res[0].Quantity)
          const updateQuantity = res.Quantity + req.body.Quantity;
          console.log(res.Quantity , req.body.Quantity)
        return  Cart.findOneAndUpdate(
            { Product: req.body.Product },
            {
              ...req.body,
              Quantity: updateQuantity,
              Price: req.body.ProductPrice * updateQuantity,
            },
            { new: true }
          )
            .then((res) => {
              return resolve({
                status: 200,
                message: res,
              });
            })
            .catch((e) => {
              // console.log(e)
              return reject({
                status: 400,
                message: "Cart is not Updated",
              });
            });
        } else {
          // console.log(req.body.Quantity*req.body.ProductPrice)
          const data = await Cart({...req.body,Price:req.body.Quantity*req.body.ProductPrice});
          data
            .save()
            .then((res) => {
              return resolve({
                status: 200,
                message: res,
              });
            })
            .catch((e) => {
              return reject({
                status: 400,
                message: "Cart is not added",
              });
            });
        }
      });
    });
  };

  GetCart = (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      if (req.query.id) {
        return Cart.find({ userId: req.query.id })
          .populate("User")
          .populate("Product")
          .then((res) => {
            return resolve({
              status: 200,
              message: res,
            });
          })
          .catch((e) => {
            // console.log(e)
            return reject({
              status: 500,
              message: "Server Error",
            });
          });
      } else {
        return reject({
          status: 400,
          message: "user is not login",
        });
      }
    });
  };
}
module.exports = new Carts();