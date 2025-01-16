import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
function BookDetailes() {
    const { state } = useLocation();
    const book = state?.book;
    console.log(book)
     const navigate = useNavigate();
  return (
    <div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand custom-navbar-brand" href="#" >BookStore</a>
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
                <a className="nav-link active custom-nav-link" aria-current="page" href="#" onClick={() => navigate("/main")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active custom-nav-link" onClick={() => navigate("/add")}>AddBooks</a>
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
                
                  placeholder="Search by title, author, or other fields"
                />
                <button type="button" >Search</button>
              </div>
            </form>
          </div>
        </div>
      </nav>

    <div
  className="card"
  style={{
    width: "50rem", 
    margin: "2rem auto", 
    padding: "1.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
    borderRadius: "8px",
    textAlign: "center", 
  }}
>
  <img
    src={book.coverImage}
    className="card-img-top"
    alt="Book Cover"
    style={{
      display: "block", 
      margin: "0 auto", 
      width: "50%", 
      height: "auto",
      borderRadius: "8px", 
      marginBottom: "1rem", 
    }}
  />
  <div className="card-body">
    <h2 className="card-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
      {book.title}
    </h2>
    <h5 className="card-author" style={{ fontSize: "1.5rem", color: "#555" }}>
      Author: {book.author}
    </h5>
    <p
      className="card-text"
      style={{ fontSize: "1.2rem", margin: "1rem 0", color: "#666" }}
    >
      {book.description}
    </p>
    <h5
      className="card-trending"
      style={{ fontSize: "1.3rem", color: book.trending ? "green" : "red" }}
    >
      Trending: {book.trending ? "Yes" : "No"}
    </h5>
    <h5 className="card-price" style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
      Price: {book.Price}DT
    </h5>
    <h5 className="card-created" style={{ fontSize: "1rem", color: "#777" }}>
      Published On: {book.createdAt}
    </h5>
  </div>
</div>
    </div>

  

    
  )
}

export default BookDetailes
