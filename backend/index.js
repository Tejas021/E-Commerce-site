const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express();

const corsConfig={
    origin: ['http://localhost:3000',"*"],
    credentials: true,
    optionsSuccessStatus: 200
}
let PORT = process.env.PORT||5000


app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser())

app.get("/cokie",(req,res)=>{
    res.cookie("token","erer")
    res.send("hoo")
})

mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`connected to ${PORT}`)
    })
})

let authRoutes= require("./routes/authRoutes")
let userRoutes = require("./routes/userRoutes")
let cartRoutes= require("./routes/cartRoutes")
let productRoutes = require("./routes/productRoutes")
let orderRoutes= require("./routes/orderRoutes")
let stripeRoutes = require('./routes/stripe')

app.use("/api/auth/",authRoutes)
app.use("/api/users/",userRoutes)
app.use("/api/products/",productRoutes)
app.use("/api/orders/",orderRoutes)
app.use("/api/cart/",cartRoutes)
app.use("/api/checkout/",stripeRoutes)


app.get("/",(req,res)=>{
    res.status(200).send("hi")
})