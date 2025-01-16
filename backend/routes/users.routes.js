const express=require("express")
const Router=express.Router()
const {register,login,currentUser}=require("../Controller/user.controller")
const verifyToken=require("../middlleware/auth")
Router.post("/login", login);

Router.post("/register", register);
Router.get("/getUser", verifyToken, currentUser);

module.exports=Router