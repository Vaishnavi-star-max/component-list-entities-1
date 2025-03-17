// write the book component code here
import React from 'react';

const BookCard=({name,image,genre,author})=>{
    return(
        <div className='book-cart'>
            <h2>{name}</h2>
            <img src={image} alt="book" />
            <h3>{genre}</h3>
            <h4>{author}</h4>
        </div>
    )
}
export default BookCard