/* import React from 'react';

const Book = ({book}) => {
    return(
        <>
            {
                book.map((item)=> {
                    let thumbnail =item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    return(
                        <>
                        <div className="book">
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">ReactJS</h3>
                                <p className="amount">&#8377;3290</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </>
    ) 
}
            
export default Book;
*/

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
