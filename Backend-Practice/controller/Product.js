const Products = require("../Modals/Product");

class ProductController {
    AddProduct = (req, res, next) => {
        console.log(req)
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
}
module.exports = new ProductController