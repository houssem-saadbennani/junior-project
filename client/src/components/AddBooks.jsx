import React, { useState } from 'react'
import axios from 'axios';
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import {useNavigate } from 'react-router-dom';

initMDB({ Input, Ripple });
function AddBooks({fetchbook,categoryy}) {
  console.log(categoryy)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
     const navigate = useNavigate();
    const[author,setAuthor]=useState("")
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("")
    const[trending,setTrending]=useState()
    const[coverImage,setCoverImage]=useState("")
    const[Price,setPrice]=useState("")
    const[createdAt,setCreatedAt]=useState("")
    const [categoryId, setCategoryId] = useState("");
    const addbooks=(obj)=>{
        const token = localStorage.getItem('token'); 
              axios.post("http://localhost:4000/api/book/add",obj,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
      })
              
              .then(()=>{
                  console.log("books added")
                  
                  if (token) {
                    setIsAuthenticated(true);
                    fetchbook();
                    navigate("/main")
                  }
      
              }).catch((error)=>{
                throw error
              })
          }
      
      
      
    
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand custom-navbar-brand" href="#">BookStore</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active custom-nav-link" aria-current="page" href="#"onClick={() => navigate("/main")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active custom-nav-link" >AddBooks</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active custom-nav-link"
                  onClick={() => navigate("/")}
                >
                  Logout
                </a>
              </li>
              
            </ul>
            <form className="d-flex custom-search-form" role="search">
              <div>
                <input
                  type="text"

                  placeholder="Search by title, author, or other fields"
                />
                <button type="button" >Search</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <form className="custom-form">
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input
          type="text"
          id="form6Example1"
          className="form-control custom-input"
          placeholder="Author"
          defaultValue={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input
          type="text"
          id="form6Example2"
          className="form-control custom-input"
          placeholder="Title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  </div>

  <div className="form-outline mb-4">
    <input
      type="text"
      id="form6Example3"
      className="form-control custom-input"
      placeholder="Description"
      defaultValue={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  <div className="form-outline mb-4">
  <select
              className="form-select"
              onChange={(e) => setCategoryId(e.target.value)}
              value={categoryId}
            >
              <option value="">Select Category</option>
              {categoryy.map((categori) => (
                <option key={categori.id} value={categori.id}>
                  {categori.CategoryName}
                </option>
              ))}
            </select>
  </div>

  <div className="form-outline mb-4">
    <input
      type="text"
      id="form6Example5"
      className="form-control custom-input"
      placeholder="Trending"
      defaultValue={trending}
      onChange={(e) => setTrending(e.target.value)}
    />
  </div>

  <div className="form-outline mb-4">
    <input
      type="text"
      id="form6Example6"
      className="form-control custom-input"
      placeholder="Cover Image"
      defaultValue={coverImage}
      onChange={(e) => setCoverImage(e.target.value)}
    />
  </div>

  <div className="form-outline mb-4">
    <input
      type="text"
      id="form6Example7"
      className="form-control custom-input"
      placeholder="Price"
      defaultValue={Price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <div className="form-outline mb-4">
    <input
      type="text"
      id="form6Example8"
      className="form-control custom-input"
      placeholder="Created At"
      defaultValue={createdAt}
      onChange={(e) => setCreatedAt(e.target.value)}
    />
  </div>

  <button
    type="button"
    className="btn btn-primary btn-block custom-btn"
    onClick={() =>
      addbooks({ author, title, description, category, trending, coverImage, Price, createdAt,CategoryId: categoryId })
    }
  >
    Add Book
  </button>
</form>


    </div>
  )
}

export default AddBooks
