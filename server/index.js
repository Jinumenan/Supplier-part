import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import supplierApi from './routes/productRoute.js'
import supplierProfileApi from './routes/profileRoute.js'
import supplierPaymentDetailsApi from './routes/paymentRoute.js'

const app = express();
app.use(express.json());
app.use(cors());



connect("mongodb://localhost:27017/FreshTea");



app.use("/server/supplier", supplierApi);
app.use("/server/supplier", supplierProfileApi);
app.use("/server/supplier", supplierPaymentDetailsApi);



app.listen(8000,()=>{
    console.log("Server is connected and running in 8000 port")
})