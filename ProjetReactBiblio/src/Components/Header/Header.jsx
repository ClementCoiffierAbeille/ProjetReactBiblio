import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import logo from '../../assets/logo.png';

const Header = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <Header>
    <div className="header">
      <h1>
        <img className='logo'
          src={logo}
          alt="logo"
          style={{
            
          }}
        />
      </h1>
      <nav className='nav'>
        <ul >
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
        </ul>
      </nav>
      <Button label="Connexion" onClick={handleButtonClick} />
    </div>
    </Header>
  );
};

export default Header;
