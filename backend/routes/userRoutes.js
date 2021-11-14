const {  verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Cryptojs=require("crypto-js")
const router = require("express").Router()
const User = require("../models/User")


// UPDATE USER

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
  
    if(req.body.password){
        newpassword=Cryptojs.AES.encrypt(req.body.password,process.env.PASS_KEY).toString()
    }
    try{
        updateUser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
      
        res.status(201).send(updateUser)
    }catch(err){
        console.log(err)
    }
})

// DELETE USER
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("deleted")
        }catch(err){
            res.status(500).json(err)
        }
})


//GET SINGLE USER

router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).send(user)
    }catch(err){
        res.status(500).json(err)
    }

})

//GET ALL USERS

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    const query=req.query.new
    try{
        const users = query?await User.find().sort({_id:-1}).limit(1):await User.find()
        res.status(200).send(users)
    }catch(err){
        res.status(500).json(err)
    }

})

//GET STATS 

router.get("/stats",verifyTokenAndAdmin,async(req,res)=>{
    const date = new Date()
    const lastYear= new Date(date.setFullYear(date.getFullYear()-1))


    try{

        const data=await User.aggregate([

{ $match: { createdAt: { $gte: lastYear } } },
{$project:{
    month:{$month:"$createdAt"}
}},

{$group:{
    _id:"$month",
    total:{$sum:1}
}}
        ])
res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})





router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports=router