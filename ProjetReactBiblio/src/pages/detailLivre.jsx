import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailLivre = () => {
  const { id } = useParams(); // Obtenez l'ID du livre à partir de l'URL

  // État local pour stocker les détails du livre
  const [bookDetails, setBookDetails] = useState(null);

  // Utilisez useEffect pour effectuer une action lorsque le composant est monté
  useEffect(() => {
    // Fonction pour récupérer les détails du livre
    const fetchBookDetails = async () => {
      try {
        // Utilisation d'Axios pour effectuer la requête GET vers l'API Google Books
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q`);
        // Mettez à jour les détails du livre dans l'état local avec les données de réponse
        setBookDetails(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails(); // Appelez la fonction pour récupérer les détails du livre
  }, [id]); // Déclenchez l'effet chaque fois que l'ID du livre change

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
            {/* Affichez l'image de couverture du livre */}
            {bookDetails.volumeInfo.imageLinks && (
              <img className="book-cover-img-DL" src={bookDetails.volumeInfo.imageLinks.thumbnail} alt="Couverture du livre" />
            )}
          </div>
          <div className="description-DL">
            <h2 className="description-title-DL">Description : </h2>
            {/* Affichez la description du livre à partir des détails du livre */}
            <p className="description-text-DL" dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description }} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailLivre;
