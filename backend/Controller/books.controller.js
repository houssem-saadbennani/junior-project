const{Book}=require("../models/index")

module.exports={
    GetAllBooks:async(req,res)=>{
        try{
            const book=await Book.findAll()
            res.status(200).send(book)

        }catch(error){
            throw error
        }

    },
    getAllBookscat: async (req, res) => {
      const cat = req.params.id
      console.log("iddd",req.params.id)
      try{
        const book= await Book.findAll({ where: {CategoryId: cat } })
        res.send(book)
      }catch(error){
       throw error
      }
      
      
    },
   AddBooks:async(req,res)=>{
    try{
        const{author,title,description,trending,coverImage,Price,createdAt,CategoryId}=req.body
        const addbook=await Book.create({author,title,description,trending,coverImage,Price,createdAt,CategoryId})
        res.status(201).send({message:"book created",addbook})
    }catch(error){
        throw error
    }
   },
   DeleteBooks:async(req,res)=>{
    try {
        const { id } = req.params;
        if (!id) {
          res.status(401).send({ message: "id is not send" });
        }
        await Book.destroy({where:{id:id}});
        res.send({ message: "Book is deleted successfully" });
      } catch (error) {
        throw error;
      }
   },
   UpdateBooks:async(req,res)=>{
    try {
        const { author,title,description,trending,coverImage,Price,createdAt } = req.body;
       
        const { id } = req.params;
        const updated = await Book.update({author,title,description,trending,coverImage,Price,createdAt},
          {where:{id:id}}
        )
        res
          .status(201)
          .send({ message: "Book is updated successfully", updated });
      } catch (error) {
        throw error;
      }
    },
   
      
    
   
}