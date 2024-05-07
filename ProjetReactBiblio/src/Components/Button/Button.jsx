import React from 'react';
import './Button.scss'; // Import du style CSS pour le composant Button

// Définition du composant Button
const Button = ({ label, onClick }) => {
  return (
    // Bouton avec gestion du clic et affichage du label
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button; 
