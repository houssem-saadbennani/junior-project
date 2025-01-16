const express=require("express")
const app=express()
const PORT=4000
const cors=require("cors")
require("./models/index")
const Booksroutes=require("./routes/books.routes")
const Userroutes=require("./routes/users.routes")
const categoryroutes=require("./routes/Categories.routes")

app.use(cors())
app.use(express.json())
app.use("/api/book",Booksroutes)
app.use("/api/user",Userroutes)
app.use("/api/category",categoryroutes)
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });