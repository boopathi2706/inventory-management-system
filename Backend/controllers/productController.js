const Product = require("../models/product.js");


const CreateProduct = async (req,res)=>{
      try {
         const {name,quantity ,price} = req.body;
          const findName = await Product.findOne({ name });
         if(!findName){
         const newItem = new Product({name,quantity,price});
         await newItem.save();
         res.status(200).json({message:"Success for Create the New Product"});
         }
         else{
            res.status(501).json({error:`Can't add the duplicate Porduct ${error}`});
            
         }
      } catch (error) {
          res.status(501).json({error:`Can't add the new Product ${error}`});
      }
}

const GetProduct = async (req,res)=>{
    try {
        const products=await Product.find();
        res.json(products);

    } catch (error) {
        res.status(501).json({error:`Can't get the product ${error}`});
    }
}

module.exports = {CreateProduct,GetProduct};