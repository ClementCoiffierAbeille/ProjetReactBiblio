import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </h1>
      <nav className="nav">
        <ul>
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
