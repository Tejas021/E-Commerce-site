const {  verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()
const Cart = require("../models/Cart")
const CartItem = require("../models/CartItem")

//CREATE CART ITEM

router.post("/:id",verifyTokenAndAuthorization,async(req,res)=>{

    const data={...req.body,userId:req.params.id}
  
    const cart = new CartItem(data);
    try{
        const savedCart=await cart.save()
        res.status(201).send(savedCart)

    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
   
})

//GET CART ITEMS

router.get("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    
    try{

        const Items=await CartItem.find({userId:req.params.id})
    res.status(200).send(Items)
    }
    catch(err){
        res.status(404).send(err)
    }
    
})




// UPDATE CART

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
  
   
    try{
        updatedCart= await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
      
        res.status(201).send(updatedCart)
    }catch(err){
        console.log(err)
    }
})

// DELETE CART
router.post("/delete/:id",verifyTokenAndAuthorization,async(req,res)=>{
        try{
         
            await CartItem.findByIdAndDelete(req.body.cartID)
            res.status(200).json("deleted")
        }catch(err){
            res.status(500).json(err)
        }
})

router.post("/clearCart/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
     
        await CartItem.deleteMany({userId:req.body.userId})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json(err)
    }
})


//GET SINGLE CART

router.get("/find/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const cart = await Cart.findOne({userId:req.params.id})
        res.status(200).send(cart)
    }catch(err){
        res.status(500).json(err)
    }

})

//GET ALL CARDS

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const carts = await Cart.find()
        res.status(200).send(carts)
    }catch(err){
        res.status(500).json(err)
    }

})









module.exports=router