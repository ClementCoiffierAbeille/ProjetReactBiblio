import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ books }) => {
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    // Redirection vers la page de détail du livre avec l'ID du livre
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
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                </div>
              </div>
            );
          }
        })
      )}
    </>
  );
};

export default Book;
