const stripe = require("stripe")(process.env.STRIPE_KEY)
const router = require("express").Router()

router.post("/payment",async(req,res)=>{
    console.log("jo")
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd",
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            console.log(stripeErr)
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})

module.exports=router
