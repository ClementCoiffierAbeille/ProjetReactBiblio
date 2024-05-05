import React from 'react';

const Book = ({ book }) => {
  return (
    <>
      {book && book.length > 0 ? (
        book.map((item, index) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <div key={index} className="book">
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
              </div>
            </div>
          );
        })
      ) : (
        <p>Aucun livre trouvé.</p>
      )}
    </>
  );
};

export default Book;
