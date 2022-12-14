const GlobalFunctions = require("../GloabalFunctions");
const Products = require("../Modals/Product");

class ProductController {
    AddProducts = (req, res, next) => {
        const result = Products.AddProduct(req);
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

    GetProducts = (req, res, next) => {
      const result = Products.GetProduct(req);
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

  GetSingleProduct = (req, res, next) => {
    const result = Products.GetSingleProduct(req);
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
ImageUpload = (req, res, next) =>{
  console.log(req)
  const result = GlobalFunctions.UploadImage(req);
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
}
module.exports = new ProductController