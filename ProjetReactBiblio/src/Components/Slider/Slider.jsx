import React, { useState, useEffect } from 'react';
import './Slider.scss'; // Importation du style CSS pour le composant Slider

// Définition du composant Slider
const Slider = ({ images }) => {
  // État local pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effet de side-effect pour passer automatiquement à la prochaine image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Appel de la fonction goToNext toutes les 5 secondes
    return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
  }, [currentIndex]); // Déclenchement de l'effet lorsque l'index de l'image actuelle change

  // Fonction pour passer à l'image précédente
  const goToPrevious = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1; // Calcul de l'index de l'image précédente
    setCurrentIndex(index); // Mise à jour de l'index de l'image actuelle
  };
  
  // Fonction pour passer à l'image suivante
  const goToNext = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1; // Calcul de l'index de l'image suivante
    setCurrentIndex(index); // Mise à jour de l'index de l'image actuelle
  };

  // Fonction pour gérer le clic sur un indicateur pour changer d'image
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index); // Mise à jour de l'index de l'image actuelle
  };

  // Rendu du composant Slider
  return (
    <div className="slider-container">
      {/* Bouton pour passer à l'image précédente */}
      <button className="prev" onClick={goToPrevious}>
          &lt;
      </button>

      {/* Affichage de l'image actuelle */}
      <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slider-image slide"
      />

      {/* Bouton pour passer à l'image suivante */}
      <button className="next" onClick={goToNext}>
          &gt;
      </button>

      {/* Indicateurs pour chaque image du slider */}
      <div className="slide-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'indicator active' : 'indicator'} // Classe active pour l'indicateur de l'image actuelle
            onClick={() => handleIndicatorClick(index)} // Gestion du clic sur l'indicateur pour changer d'image
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider; 
