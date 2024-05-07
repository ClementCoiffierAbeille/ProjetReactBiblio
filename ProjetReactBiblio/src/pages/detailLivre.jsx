import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importation du hook useParams pour récupérer les paramètres de l'URL
import axios from 'axios'; // Importation du module Axios pour les requêtes HTTP

// Définition du composant DetailLivre
const DetailLivre = () => {
  const { id } = useParams(); // Extraction de l'ID du livre à partir des paramètres de l'URL

  // État local pour stocker les détails du livre
  const [bookDetails, setBookDetails] = useState(null);

  // Effet de side-effect pour récupérer les détails du livre à partir de l'API Google Books
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Requête HTTP GET pour obtenir les détails du livre avec l'ID spécifié
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q`);
        setBookDetails(response.data); // Mise à jour des détails du livre avec les données reçues
      } catch (error) {
        console.error('Error fetching book details:', error); // Gestion des erreurs lors de la récupération des détails du livre
      }
    };

    fetchBookDetails(); // Appel de la fonction pour récupérer les détails du livre lors du premier rendu
  }, [id]); // Déclenchement de l'effet lorsque l'ID du livre change

  // Rendu du composant DetailLivre
  return (
    <div className="detail-livre-container-DL">
      {/* Vérification que les détails du livre existent avant de les afficher */}
      {bookDetails && (
        <>
          {/* Section des détails du livre */}
          <div className="book-details-DL">
            <h2 className="book-title-DL">{bookDetails.volumeInfo.title}</h2>
            <p className="book-info-DL">Auteur(s): {bookDetails.volumeInfo.authors && bookDetails.volumeInfo.authors.join(', ')}</p>
            <p className="book-info-DL">Date de publication: {bookDetails.volumeInfo.publishedDate}</p>
            <p className="book-info-DL">Pages: {bookDetails.volumeInfo.pageCount}</p>
            <p className="book-info-DL">Catégorie(s): {bookDetails.volumeInfo.categories}</p>
            <p className="book-info-DL">Langue: {bookDetails.volumeInfo.language}</p>
          </div>
          {/* Section de la couverture du livre */}
          <div className="book-cover-DL">
            {bookDetails.volumeInfo.imageLinks && (
              <img className="book-cover-img-DL" src={bookDetails.volumeInfo.imageLinks.thumbnail} alt="Couverture du livre" />
            )}
          </div>
          {/* Section de la description du livre */}
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
