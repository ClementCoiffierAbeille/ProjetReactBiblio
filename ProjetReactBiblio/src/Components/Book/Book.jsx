import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ books }) => {
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    
    navigate(`/detail-livre/${id}`);
  };

  return (
    <>
      {books && books.length > 0 && (
        books.map((item, index) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

          if (thumbnail !== undefined) {
            return (
              <div key={index} className="book" onClick={() => handleBookClick(item.id)}>
                <img src={thumbnail} alt="" />
              </div>
            );
          }
        })
      )}
    </>
  );
};

export default Book;
