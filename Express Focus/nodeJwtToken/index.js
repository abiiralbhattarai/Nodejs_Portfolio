const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secretKey"

app.get("/",(req,resp) => {
    resp.json({
        message: "a sample api"
    })
})

app.post("/login",(req,res)=>{
    const user ={
        id:1,
        username:"Abiral",
        email:"abi@gmail.com"
    }
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
        res.json({
            token
        })
    })
})

app.listen(5000,()=>{
    console.log("app is running in 5000 port");

})