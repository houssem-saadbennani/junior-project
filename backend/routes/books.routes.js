const express=require("express")
const Router=express.Router()
const {GetAllBooks,AddBooks,DeleteBooks,UpdateBooks,getAllBookscat}=require("../Controller/books.controller")
const verifyToken=require("../middlleware/auth")

Router.get("/get",verifyToken,GetAllBooks)
Router.post("/add",verifyToken,AddBooks)
Router.delete("/delete/:id",verifyToken,DeleteBooks)
Router.put("/update/:id",verifyToken,UpdateBooks)
Router.get("/category/:id",verifyToken,getAllBookscat);




module.exports=Router