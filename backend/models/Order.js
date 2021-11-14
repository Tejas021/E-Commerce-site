const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OrderShema =new Schema({
    userId:{required:true,type:String},
    Orders:[
        {
            OrderId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"pending",required:true}
    
},{timestamps:true})

const Order = mongoose.model("Order",OrderShema)

module.exports=Order;