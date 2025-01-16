import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';
import Category from './Category';

function MainPage({ books, deleteBooks, fetchbook, handleCatChange, category }) {
  const [query, setQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query) {
      setFilteredBooks(books);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(lowerQuery) || book.author.toLowerCase().includes(lowerQuery)
    );
    setFilteredBooks(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [query, books]);

  return (
    <div>
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
                <a className="nav-link active custom-nav-link" aria-current="page" href="#">Home</a>
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
            <form className="d-flex custom-search-form" role="search" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, author, or other fields"
                />
                <button type="button" onClick={handleSearch}>Search</button>
              </div>
            </form>
          </div>
        </div>
      </nav>  
       <br></br>
       <br></br>
       <br></br>

        <Category handleCatChange={handleCatChange} category={category} />
      <BookList books={filteredBooks} deleteBooks={deleteBooks}  />
    </div>
  );
}

export default MainPage;
