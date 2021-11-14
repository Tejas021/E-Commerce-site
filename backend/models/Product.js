const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ProductShema =new Schema({
    title:{required:true,type:String}
    ,desc:{required:true,type:String}
    ,img:{required:true,type:String}
    ,size:{type:Array}
    ,color:{
        type:Array}
    ,categories:{type:Array}
    ,price:{required:true,type:Number
    }
},{timestamps:true})

const Product = mongoose.model("Product",ProductShema)

module.exports=Product;