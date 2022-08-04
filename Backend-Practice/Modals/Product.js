const Product = require("../Schema/ProductSchema");
class Products {
  AddProduct = async (req) => {
    // console.log(req.body);
    const { ProductName, Price, Quantity, Category, Description } = req.body;
    return new Promise(async (resolve, reject) => {
      if (ProductName && Price && Quantity && Category && Description) {
        return Product.findOne({
            ProductName:ProductName
        })
        .then(async(res)=>{
            if(res){
                return reject({
                    status: 400,
                    message: "Product is Already Register",
                  });
            }
            else{
                const data = await Product(req.body);
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
                      message: "Product is not added",
                    });
                  });
            }
        })
    
      } else {
        return reject({
          status: 403,
          message: "Please fill all fields",
        });
      }
    });
  };

  GetProduct = async (req) =>{
    // console.log(req.body)
    return new Promise(async (resolve, reject) => {
      return Product.find()
      .then((res)=>{
        return resolve({
            status: 200,
            message: res,
          });
      })
      .catch((e)=>{
        return reject({ status: 401, msg: er });
      }) 
    })
  }
}
module.exports = new Products();
