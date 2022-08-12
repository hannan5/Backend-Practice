const Cart = require("../Modals/Cart");
const Carts = require("../Modals/Cart");
class CartController {
AddCarts = (req,res,next)=>{
    const result = Carts.AddCart(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      })}

      GetCart = (req, res, next) => {
        const result = Cart.GetCart(req);
        result
          .then((resp) => {
            // res.status(200).json(resp);
            res.status(200).json(resp);
          })
          .catch((e) => {
            console.log(e);
            res.status(400).json(e);
          })
    }

    DeleteSingleCart = (req, res, next) => {
      const result = Cart.RemoveSingleCart(req);
      result
        .then((resp) => {
          // res.status(200).json(resp);
          res.status(200).json(resp);
        })
        .catch((e) => {
          console.log(e);
          res.status(400).json(e);
        })
  }

  EmptyCart = (req, res, next) => {
    const result = Cart.EmptyCart(req);
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
module.exports = new CartController;