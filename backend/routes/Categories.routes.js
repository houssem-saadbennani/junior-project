const express=require("express")
const Router=express.Router()
const{ getAllcategory,addcategory}=require("../Controller/Categories.controller")
const verifyToken=require("../middlleware/auth")
Router.get("/get", getAllcategory,verifyToken)
Router.post("/add",addcategory,verifyToken)










module.exports=Router