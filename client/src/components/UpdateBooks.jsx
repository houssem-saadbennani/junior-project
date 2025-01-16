import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdateBooks({ fetchbook ,categoryy}) {
    const { state } = useLocation();
    const book = state?.book;

    const [author, setAuthor] = useState(book?.author || '');
    const [title, setTitle] = useState(book?.title || '');
    const [description, setDescription] = useState(book?.description || '');
    const [category, setCategory] = useState(book?.category || '');
    const [trending, setTrending] = useState(book?.trending || false);
    const [coverImage, setCoverImage] = useState(book?.coverImage  ||'');
    const [Price, setPrice] = useState(book?.Price || '');
    const [createdAt, setCreatedAt] = useState(book?.createdAt || '');
    const [categoryId, setCategoryId] = useState(book?.categoryId || '');

    const navigate = useNavigate();

    const updatebooks = () => {
        const token = localStorage.getItem('token');
        axios.put(`http://localhost:4000/api/book/update/${book.id}`, {
            author,
            title,
            description,
            category,
            trending,
            coverImage,
            Price,
            createdAt,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => {
            console.log("Book updated");
            fetchbook();
            navigate("/main");
        })
        .catch(error => {
            console.error(error);
        });
    };
return (
        <div className="container">
            <div className="update-book-form-container">
  <h2 className="form-title">Update Book</h2>
  <form className="update-book-form">
    <input
      type="text"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      placeholder="Author"
      className="form-input"
    />
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      className="form-input"
    />
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      className="form-input"
    />
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
    <input
      type="text"
      value={coverImage}
      onChange={(e) => setCoverImage(e.target.value)}
      placeholder="Cover Image URL"
      className="form-input"
    />
    <input
      type="number"
      value={Price}
      onChange={(e) => setPrice(e.target.value)}
      placeholder="Price"
      className="form-input"
    />
    <input
      type="number"
      value={createdAt}
      onChange={(e) => setCreatedAt(e.target.value)}
      placeholder="Created At"
      className="form-input"
    />
    <button
      type="button"
      onClick={updatebooks}
      className="form-button"
    >
      Update Book
    </button>
  </form>
</div>
</div>
    );
}

export default UpdateBooks;
 