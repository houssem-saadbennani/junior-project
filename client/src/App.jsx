import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBooks from "./components/AddBooks.jsx";
import LoginPage from "./components/LoginPage.jsx"
import Register from "./components/Register.jsx";
import MainPage from "./components/MainPage.jsx";
import UpdateBooks from "./components/UpdateBooks.jsx";
import BookDetailes from "./components/BookDetailes.jsx";


function App() {
 
 
  const[books,setBooks]=useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookcat,setBookcat]=useState([])
  const [category,setCategory]=useState([])

const fetchbook=async (catid="all")=>{
  try {
    const token = localStorage.getItem('token');
    const endpoint=catid==="all"
    ?"http://localhost:4000/api/book/get"
    :`http://localhost:4000/api/book/category/${catid}`
    const response= await axios.get(endpoint,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
    setBooks(response.data)
  }catch (error) {
    throw error;
  }
}
const fetchbookcat= async ()=>{
  try {
    const token = localStorage.getItem('token');
    const bookcat=await axios.get("http://localhost:4000/api/category/get",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setBookcat(bookcat.data)
  } catch (error) {
    console.log(error);
    
  }
}
 useEffect(()=>{
  const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchbook()
      fetchbookcat()
    }
 },[])
 const deleteBooks=(id)=>{
  const token = localStorage.getItem('token');
  axios.delete(`http://localhost:4000/api/book/delete/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(()=>{
    if (token) {
      setIsAuthenticated(true);
      fetchbook();
    }
  }).catch((error)=>{
      throw error
  })
 }
 useEffect(()=>{
  axios.get("http://localhost:4000/api/category/get")
  .then((response)=> {
    console.log(response.data , 'categoryyyyyyyyyyyyyyyy');


    setCategory(response.data)
  })
  .catch((error)=> {console.log(error ,"error");
  })
  },[]);


 const handleCatChange=(catid)=>{
  fetchbook(catid)
}
  
  return  <Router>
   <Routes>
          <Route path="/" element={<LoginPage  />} />
         <Route path="/main" element={<MainPage books={books} deleteBooks={deleteBooks} fetchbook={fetchbook} handleCatChange={handleCatChange} category={category}  />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/add" element={<AddBooks fetchbook={fetchbook} categoryy={category}  />} />
          <Route
  path="/update"
  element={<UpdateBooks books={books} fetchbook={fetchbook} categoryy={category} />}
/>
<Route  path="/detailes" element={<BookDetailes/>}/>

      </Routes>
      </Router>
}

export default App;
