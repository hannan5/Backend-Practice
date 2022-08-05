const Cart = require("../Schema/CartSchema");
class Carts {
  AddCart = (req) => {
    return new Promise(async (resolve, reject) => {
        const data = await Cart(req.body)
        data.save()
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
    });
  };

  GetCart = (req,res,next) =>{
    return new Promise(async (resolve, reject) => {
        if(req.query.id){
            return Cart.find({userId:req.query.id})
            .then((res)=>{
                return resolve({
                    status: 200,
                    message: res,
                  });
            })
            .catch((e) => {
                console.log(e)
                return reject({
                  status: 500,
                  message: 'Server Error',
                });
              });
        }
        else{
            return reject({
                status: 400,
                message: 'user is not login',
              });
        }
    })
  }
}
module.exports = new Carts()