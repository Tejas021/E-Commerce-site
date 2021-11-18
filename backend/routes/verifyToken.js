const jwt = require("jsonwebtoken")

const verifyToken= async(req,res,next)=>{
    const token=req.cookies.token
    
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err)res.status(404).json("not Authorized")
            else{
                req.user=user
                next()
            }
        })
    }
    else{
        res.status(401).json("not Authenticated")
    }

}


const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id||req.user.isAdmin===true){
            next()
        }
        else{
            res.status(403).json("unauthroized")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin===true){
            next()
        }
        else{
            res.status(403).json("unauthroized")
        }
    })
}


module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}