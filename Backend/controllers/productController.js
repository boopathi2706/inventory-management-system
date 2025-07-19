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

const GetByProductWithId=async(req,res)=>{
    try {
        const id=req.params.id;
        const data= await Product.findById(id);
        if(!data){
            res.status(501).json({message:"data not found"});
        }
        res.json(data);
    } catch (error) {
        res.status(501).json({error:`Can't get the product ${error}`});
    }
}


const DeleteProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        await Product.findByIdAndDelete(id);
        res.status(201).json({message:"success"})
    } catch (error) {
         res.status(501).json({error:`internal error:  ${error}`});
    }
}


const UpdateProduct=async(req,res)=>{
    try {
         const id = req.params.id;
    const data =req.body;
    const updated_data=await Product.findByIdAndUpdate(id,data,{ new: true });
    if(!updated_data){
        res.status(501).json({message:"the data not found"})
    }
    res.status(201).json(updated_data);
    } catch (error) {
        res.status(501).json({error:`internal error:  ${error}`});
    }
   
}

module.exports = {CreateProduct,GetProduct,DeleteProduct,UpdateProduct,GetByProductWithId};