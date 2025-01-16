import React from 'react'

import {useNavigate } from 'react-router-dom';
function BookList({books,deleteBooks}) {
    const navigate = useNavigate();
   


  return (
    <ul className="card-container">
    {books.map((el) => (
      <li className="single-card" key={el.id}>
        <a
          className="image-card"
          href={el.coverImage}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `url(${el.coverImage})`,
          }}
          data-image-full={el.coverImage}
        >
          <img
            src={el.coverImage}
            alt={el.title}
          />
        </a>
        <a
          className="card-content"
          href={el.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 onClick={()=>{navigate("/detailes",{ state: { book: el } })}} >{el.title}</h2>
          <p>{el.author}</p>
          <button onClick={() => deleteBooks(el.id)}>Delete</button>
          <button onClick={() => navigate("/update", { state: { book: el } })}>Update</button>
        </a>
      </li>
    ))}
  </ul>
  

  )
}

export default BookList
