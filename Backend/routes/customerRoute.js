const express = require("express");
const router=express.Router();
const {CreateCustomer,GetCustomer,DeleteCustomer,UpdateCustomer,GetByCustomerId} = require("../controllers/customerController.js");

router.post("/create-customer",CreateCustomer);
router.get("/get-customer",GetCustomer);
router.get("/get-customer/:id",GetByCustomerId);
router.delete("/delete-customer/:id",DeleteCustomer)
router.put("/update-customer/:id",UpdateCustomer)


module.exports = router;