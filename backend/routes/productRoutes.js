const {  verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()
const Product = require("../models/Product")


//CREATE PRODUCT

router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const product = new Product(req.body);
    try{
        const savedProduct=await product.save()
        res.status(201).send(savedProduct)

    }
    catch(err){
        res.status(500).json(err)
    }
})




// UPDATE PRODUCT

router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
  
   
    try{
        updatedProduct= await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
      
        res.status(201).send(updatedProduct)
    }catch(err){
        console.log(err)
    }
})

// DELETE PRODUCT
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
        try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("deleted")
        }catch(err){
            res.status(500).json(err)
        }
})


//GET SINGLE PRODUCT

router.get("/find/:id",async(req,res)=>{
    console.log("called")
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).send(product)
    }catch(err){
        res.status(500).json(err)
    }

})

//GET ALL PRODUCTS

router.get("/",async(req,res)=>{
    const qNew=req.query.new
    const qCategory=req.query.category
  
    try{
        let products
        if(qNew){
          
            products=await Product.find().sort({createdAt:-1}).limit(9)
        }
        else if(qCategory){
        
            products=await Product.find({
                categories:{
                    $in:[qCategory]
                }
            })
        }
        else{
            console.log("called3")
            products=await Product.find().then(res=>res)
      
        }
        res.status(200).send(products)
    }catch(err){
        res.status(500).json(err)
    }

})









module.exports=router