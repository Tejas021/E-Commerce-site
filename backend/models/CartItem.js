const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CartItemShema =new Schema({
    userId:{required:true,type:String},
    name:{required:true,type:String}
    ,desc:{required:true,type:String}
    ,img:{required:true,type:String}
    ,size:{type:String}
    ,color:{
        type:String}
    
    ,price:{required:true,type:Number
    },
    quantity:{type:Number,default:1}

    
    
},{timestamps:true})

const CartItem = mongoose.model("CartItem",CartItemShema)

module.exports=CartItem;