var Product = require("../models/product");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.product_create = function(req, res) {
  var product = new Product({
    container: req.body.container,
    value: req.body.value
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.product_details = function(req, res) {
  Product.find(function(err, product) {
    if (err) return next(err);
    var x = product;
    console.log(x);
    var z = Object.keys(x).length;
    console.log(z);
    res.send(product[z - 1]);
  });
};
