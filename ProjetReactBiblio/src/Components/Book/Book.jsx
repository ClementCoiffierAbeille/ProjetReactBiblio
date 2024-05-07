import React from 'react';
import { useNavigate } from 'react-router-dom';

// Composant Book qui affiche une liste de livres
const Book = ({ books }) => {
  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();

  // Fonction gérant le clic sur un livre
  const handleBookClick = (id) => {
    // Navigation vers la page de détail du livre avec son ID
    navigate(`/detail-livre/${id}`);
  };

  return (
    <>
      {/* Vérification que la liste de livres est valide et non vide */}
      {books && books.length > 0 && (
        // Boucle à travers la liste de livres et affichage de chaque livre
        books.map((item, index) => {
          // Récupération du lien de la miniature du livre s'il existe
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

          // Vérification que la miniature existe avant de l'afficher
          if (thumbnail !== undefined) {
            return (
              // Affichage d'un livre avec sa miniature et gestion du clic
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
