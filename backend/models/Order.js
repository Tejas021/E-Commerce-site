const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OrderShema =new Schema({
    userId:{required:true,type:String},
    products:{type:Array},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"pending",required:true}
    
},{timestamps:true})

const Order = mongoose.model("Order",OrderShema)

module.exports=Order;