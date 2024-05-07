import React, { useState } from 'react';
import axios from 'axios'; // Importation du module Axios pour les requêtes HTTP
import Book from '../Book/Book.jsx'; // Importation du composant Book
import Spinner from '../Spinner/Spinner.jsx'; // Importation du composant Spinner pour l'affichage de chargement
import './Search.scss'; // Importation du style CSS pour le composant Search

// Définition du composant Search
const Search = () => {
  // États locaux pour gérer le terme de recherche, les résultats de la recherche, l'état de chargement et le livre survolé
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredBook, setHoveredBook] = useState(null);

  // Fonction pour effectuer une recherche de livres
  const handleSearch = async () => {
    setLoading(true); // Activation de l'état de chargement
    try {
      // Requête HTTP GET à l'API Google Books pour obtenir les résultats de recherche en fonction du terme
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q&maxResults=20`
      );
      setSearchResults(response.data.items); // Mise à jour des résultats de recherche avec les données reçues
    } catch (error) {
      console.error('Error fetching search results:', error); // Gestion des erreurs lors de la recherche
    } finally {
      setLoading(false); // Désactivation de l'état de chargement une fois la recherche terminée
    }
  };

  // Fonction pour gérer la pression de la touche "Entrée" lors de la saisie du terme de recherche
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Appel de la fonction de recherche si la touche "Entrée" est pressée
    }
  };

  // Fonction pour gérer le survol d'un livre avec la souris
  const handleMouseEnter = (book) => {
    setHoveredBook(book); // Mise à jour du livre survolé
  };

  // Fonction pour gérer la sortie de la souris d'un livre
  const handleMouseLeave = () => {
    setHoveredBook(null); // Réinitialisation du livre survolé à null
  };

  return (
    <div className="search-page">
      {/* Champ de saisie pour entrer le terme de recherche */}
      <input
        type="text"
        placeholder="Rechercher un livre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {/* Bouton pour lancer la recherche */}
      <button className="buttonSearch" onClick={handleSearch}>Rechercher</button>
      {/* Affichage du composant Spinner pendant le chargement */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Affichage des résultats de recherche */}
          {searchResults.length > 0 ? (
            <div className="book-container">
              {searchResults.map((book) => (
                <div
                  key={book.id}
                  className="book"
                  onMouseEnter={() => handleMouseEnter(book)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Affichage du composant Book pour chaque livre */}
                  <Book books={[book]} />
                  {/* Affichage du titre du livre au survol */}
                  {hoveredBook === book && (
                    <div className="book-title-box">
                      <div className="book-title">{book.volumeInfo.title}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun résultat trouvé pour cette recherche.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Search; 
