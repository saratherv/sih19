var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require("../controllers/product");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", product_controller.test);

router.post("/create", product_controller.product_create);

router.get("/getD", product_controller.product_details);

router.get("/display", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
