const express = require("express");
const router=express.Router();
const {CreateProduct,GetProduct} = require("../controllers/productController.js");

router.post("/create-product",CreateProduct);
router.get("/get-product",GetProduct);



module.exports = router;