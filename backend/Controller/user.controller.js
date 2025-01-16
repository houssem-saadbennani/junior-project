const {User}=require("../models/index")
const jwt =require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { where } = require("../models/books.model")
module.exports={
register:async(req,res)=>{
    try{
        const {email,name,password}=req.body
        const existinguser= await User.findOne({where:{email}})
        if(existinguser){
            return res.status(400).send({message:"User already exist"})
        }
        const hashePassword=await bcrypt.hash(password,10)
        const newUser = await User.create({
            email,
            password:hashePassword,
            name
        })
        return res.status(201).send({message:"register sucess",user:newUser})

    }catch(error){
        throw error
    }
},
login:async(req,res)=>{
    try{
     const {email,password}=req.body
     console.log(req.body)
     const user= await User.findOne({where:{email}})
     console.log(user)
     if(!user){
        return res
          .status(404)
          .send({ message: "email or password is incorrect" });
      
     }
     const comparePassword = await bcrypt.compare(password, user.password);
     if (!comparePassword) {
        return res
          .status(401)
          .send({ message: "email or password is incorrect" });
      }
      const token = jwt.sign({ id: user.id }, "1234", { expiresIn: "100h" });
      return res.status(201).send({ message: "Login success", user, token });
    }catch(error){
        throw error
    }
},
currentUser: async (req, res) => {
    try {

      const user = await User.findOne({where:{ id: req.user }})
      console.log(user);

      res.send(user);
    } catch (error) {
      throw error
    }
  },
}