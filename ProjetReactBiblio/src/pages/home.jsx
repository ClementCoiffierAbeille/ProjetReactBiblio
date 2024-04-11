import React from 'react';
import Header from '../Components/Header/Header.jsx';
import "../Components/Header/Header.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <h2>Contenu de la page d'accueil</h2>
        <p>Bienvenue !</p>
 
      </div>
    </div>
  );
};

export default Home;
