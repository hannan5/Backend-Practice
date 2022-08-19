const Product = require("../Schema/ProductSchema");
class Products {
  AddProduct = async (req) => {
    // console.log(req.body);
    const { ProductName, Price, Quantity, Category, Description } = req.body;
    return new Promise(async (resolve, reject) => {
      if (ProductName && Price && Quantity && Category && Description) {
        return Product.findOne({
          ProductName: ProductName,
        }).then(async (res) => {
          if (res) {
            return reject({
              status: 400,
              message: "Product is Already Register",
            });
          } else {
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
        });
      } else {
        return reject({
          status: 403,
          message: "Please fill all fields",
        });
      }
    });
  };

  GetProduct = async (req) => {
    let datequery = {};
    let nameFilter = req.query.ProductName
      ? { ProductName: { $regex: req.query.ProductName, $options: "i" } }
      : {};
    let priceFilter =
      req.query.MaxPrice && req.query.MinPrice
        ? { Price: { $lte: req.query.MaxPrice, $gte: req.query.MinPrice } }
        : {};
    let ProductCategory = req.query.Category
      ? { Category: req.query.Category }
      : {};
    let ProductCount = await Product.countDocuments({
      ...nameFilter,
      ...priceFilter,
      ...ProductCategory,
    });
    let fromdate = new Date(req.query.fromdate);
    let todate = new Date(req.query.todate);

    if (fromdate == !null && todate == !null) {
      datequery = {
        Date: {
          $gte: fromdate,
          $lte: todate,
        },
      };
    }
    else if(req.query.todate){
      datequery={
        Date:{
          $lte:todate
        }
      }
    }
    else if(req.query.fromdate){
      datequery={
        Date:{
          $gte:fromdate,
        }
      }
    }
    

    return new Promise(async (resolve, reject) => {
      return Product.find()
        .find(nameFilter)
        .find(priceFilter)
        .find(ProductCategory)
        .find(datequery)
        .then((res) => {
          return resolve({
            status: 200,
            message: res,
            TotalProduct: ProductCount,
          });
        })
        .catch((e) => {
          return reject({ status: 401, msg: e });
        });
    });
  };

  GetSingleProduct = (req) => {
    return new Promise(async (resolve, reject) => {
      if (req.query.id) {
        return Product.findOne({ _id: req.query.id })
          .then((res) => {
            return resolve({
              status: 200,
              data: res,
            });
          })
          .catch((e) => {
            return reject({
              status: 400,
              error: "Product is not available",
            });
          });
      } else {
        return reject({
          status: 400,
          message: "Product is not Available",
        });
      }
    });
  };
}
module.exports = new Products();
