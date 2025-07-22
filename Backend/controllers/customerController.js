const Customer = require("../models/customer.js");


const CreateCustomer = async (req,res)=>{
      try {
         const {customerName,phoneNo,address} = req.body;
          const findName = await Customer.findOne({ customerName });
         if(!findName){
         const newCustomer = new Customer({customerName,phoneNo,address});
         await newCustomer.save();
         res.status(200).json({message:"Success for Create the New Customer"});
         }
         else{
            res.status(501).json({error:`Can't add the duplicate Customer ${error}`});
            
         }
      } catch (error) {
          res.status(501).json({error:`Can't add the new Customer ${error}`});
      }
}

const GetCustomer = async (req,res)=>{
    try {
        const customer=await Customer.find();
        res.json(customer);

    } catch (error) {
        res.status(501).json({error:`Can't get the Customer ${error}`});
    }
}

const GetByCustomerId=async(req,res)=>{
    try {
        const id=req.params.id;
        const data= await Customer.findById(id);
        if(!data){
            res.status(501).json({message:"data not found"});
        }
        res.json(data);
    } catch (error) {
        res.status(501).json({error:`Can't get the Customer ${error}`});
    }
}


const DeleteCustomer=async(req,res)=>{
    try {
        const id=req.params.id;
        await Customer.findByIdAndDelete(id);
        res.status(201).json({message:"success"})
    } catch (error) {
         res.status(501).json({error:`internal error:  ${error}`});
    }
}


const UpdateCustomer=async(req,res)=>{
    try {
         const id = req.params.id;
    const data =req.body;
    const updated_data=await Customer.findByIdAndUpdate(id,data,{ new: true });
    if(!updated_data){
        res.status(501).json({message:"the data not found"})
    }
    res.status(201).json(updated_data);
    } catch (error) {
        res.status(501).json({error:`internal error:  ${error}`});
    }
   
}

module.exports = {CreateCustomer,GetCustomer,DeleteCustomer,UpdateCustomer,GetByCustomerId};