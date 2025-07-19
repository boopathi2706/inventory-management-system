const express = require("express");
const router=express.Router();
const {CreateProduct,GetProduct,DeleteProduct,UpdateProduct,GetByProductWithId} = require("../controllers/productController.js");

router.post("/create-product",CreateProduct);
router.get("/get-product",GetProduct);
router.get("/get-product/:id",GetByProductWithId);
router.delete("/delete-product/:id",DeleteProduct)
router.put("/update-product/:id",UpdateProduct)


module.exports = router;