const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ProductRoute = require("./routes/productRoute.js");
const CustomerRoute = require("./routes/customerRoute.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001 ;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log("Database Connected")})
.catch(()=>{console.log("Database Can't Connect")})

app.use("/app/product",ProductRoute);
app.use("/app/customer",CustomerRoute);


app.listen(PORT,()=>{
    console.log(`Server Running on Port : ${PORT}`);
})