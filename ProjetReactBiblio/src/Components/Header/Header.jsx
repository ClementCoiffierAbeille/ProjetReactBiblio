import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import logo from '../../assets/logo.png';
import './Header.scss';

import axios from 'axios';

const Header = () => {
  
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook=(evt)=>{
    if(evt.key==='Enter'){
      
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q`+'&maxResults=40')
      .then((response)=>{
        console.log(response.data.items);
        setData(response.data.items);
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }


  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <header className="header">
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
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
          <div className='searchbar'>
          <input type='text' placeholder='Rechercher un livre...' value={search} onChange={e=>setSearch(e.target.value)}
        onKeyDown={searchBook} />
        
        <Button id="loupe" label='🔎' onClick={handleButtonClick} />
      </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

