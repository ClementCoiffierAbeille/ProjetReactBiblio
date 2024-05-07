import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailLivre = () => {
  const { id } = useParams(); 


  const [bookDetails, setBookDetails] = useState(null);


  useEffect(() => {

    const fetchBookDetails = async () => {
      try {

        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q`);
 
        setBookDetails(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]); 

  return (
    <div className="detail-livre-container-DL">
      {bookDetails && (
        <>
          <div className="book-details-DL">
            <h2 className="book-title-DL">{bookDetails.volumeInfo.title}</h2>
            <p className="book-info-DL">Auteur(s): {bookDetails.volumeInfo.authors && bookDetails.volumeInfo.authors.join(', ')}</p>
            <p className="book-info-DL">Date de publication: {bookDetails.volumeInfo.publishedDate}</p>
            <p className="book-info-DL">Pages: {bookDetails.volumeInfo.pageCount}</p>
            <p className="book-info-DL">Catégorie(s): {bookDetails.volumeInfo.categories}</p>
            <p className="book-info-DL">Langue: {bookDetails.volumeInfo.language}</p>
          </div>
          <div className="book-cover-DL">
            {bookDetails.volumeInfo.imageLinks && (
              <img className="book-cover-img-DL" src={bookDetails.volumeInfo.imageLinks.thumbnail} alt="Couverture du livre" />
            )}
          </div>
          <div className="description-DL">
            <h2 className="description-title-DL">Description : </h2>
            <p className="description-text-DL" dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description }} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailLivre;
