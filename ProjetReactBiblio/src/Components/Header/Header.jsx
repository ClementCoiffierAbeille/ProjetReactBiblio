import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Importation de l'image du logo
import './Header.scss'; // Importation du style CSS pour le composant Header

// Définition du composant Header
const Header = () => {
  return (
    <header className="header">
      {/* Affichage du logo */}
      <h1>
        <img
          className="logo"
          src={logo} // Utilisation de l'image du logo importée
          alt="logo" // Texte alternatif pour l'image
        />
      </h1>
      {/* Navigation dans l'en-tête */}
      <nav className="nav">
        <ul>
          {/* Liens vers différentes pages */}
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/horaires">Horaires</Link>
          </li>
          <li>
            <Link to="/favoris">Favoris</Link>
          </li>
          <li>
            <Link to="/emprunts">Emprunts</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
          <li>
            <Link to="/search">Recherche</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
