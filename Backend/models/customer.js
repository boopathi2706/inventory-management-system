const mongoose =require("mongoose");

const CustomerSchema=new mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Customer",CustomerSchema);