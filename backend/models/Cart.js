const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CartShema =new Schema({
    userId:{required:true,type:String},
    name:{type:String}
    ,desc:{required:true,type:String}
    ,img:{required:true,type:String}
    ,size:{type:String}
    ,color:{
        type:String}
    
    ,price:{required:true,type:Number
    }

    
    
},{timestamps:true})

const Cart = mongoose.model("Cart",CartShema)

module.exports=Cart;