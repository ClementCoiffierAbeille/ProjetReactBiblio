import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import Slider from '../Components/Slider/Slider.jsx';
import image1 from '../assets/GalerieArt.jpeg';
import image2 from '../assets/GaleriePhoto.jpeg';
import Book from '../Components/Book/Book.jsx';

const IMG = [image1, image2];

const Home = () => {
  const [newBooks, setNewBooks] = useState([]);
  const [popularBooksFirstHalf, setPopularBooksFirstHalf] = useState([]);
  const [popularBooksSecondHalf, setPopularBooksSecondHalf] = useState([]);

  useEffect(() => {
    const fetchNewBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=8&orderBy=newest&key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q'
        );
        setNewBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching new books:', error);
      }
    };

    const fetchPopularBooksFirstHalf = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=16&orderBy=relevance&key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q'
        );
        setPopularBooksFirstHalf(response.data.items.slice(0, 8));
      } catch (error) {
        console.error('Error fetching first half of popular books:', error);
      }
    };

    const fetchPopularBooksSecondHalf = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=16&orderBy=relevance&key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q'
        );
        setPopularBooksSecondHalf(response.data.items.slice(8));
      } catch (error) {
        console.error('Error fetching second half of popular books:', error);
      }
    };

    fetchNewBooks();
    fetchPopularBooksFirstHalf();
    fetchPopularBooksSecondHalf();
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className='actualite'>
          <h2>Actualités : </h2>
          <p>Découvrez la toute nouvelle Médiathèque de Talence en ligne ! Profitez d'une expérience de navigation améliorée. Explorez notre vaste collection de ressources culturelles et réservez nos bouquins avec plus de facilité. Plongez dans la culture dès maintenant !</p>
        </div>
        <div className='horaires'>
          <h2>Horaires : </h2>
          <p>
            Du Lundi au Vendredi :  8h - 19h<br />
            Samedi : 9h - 12h / 13h - 18h<br />
            Dimanche : 9h - 12h
          </p>
        </div>
      </div>
      <div className='evenements'>
        <div className='event'>
          <h2>Événements : </h2>
          <p>
            Découvrez les temps forts culturels à la Médiathèque de Talence ce mois-ci !<br />
            Exposition Artistique “Voyage à travers les Couleurs” : Explorez l'univers captivant de l'art contemporain avec notre exposition mettant en lumière les œuvres vibrantes d'artistes locaux.<br />
            Du 10 au 25 février.<br />
            Rencontre Littéraire avec l'auteur local Marie Dubois : Rejoignez-nous pour une discussion animée avec l'écrivaine Marie Dubois autour de son dernier roman acclamé par la critique.<br />
            Le 15 février à 18h.<br />
            Atelier Créatif pour Enfants “Fabrique ta Propre Histoire” : Stimulez l'imagination de vos enfants avec notre atelier ludique où ils pourront créer et illustrer leur propre histoire.<br />
            Le 20 février à 15h.
          </p>
        </div>
        <div className='carousel'>
          <Slider images={IMG} />
        </div>
      </div>

      <div className='nouveautes'>
        <h2>Nouveautés : </h2>
      </div>
      <div className='nouveauteslivres'>
        <Book books={newBooks} />
      </div>

      <div className='lesplusempruntes'>
        <h2>Les plus empruntés : </h2>
      </div>
      <div className='nouveauteslivres'>
        <Book books={popularBooksFirstHalf} />
      </div>

      <div className='noscoupsdecoeur'>
        <h2>Nos coups de cœur : </h2>
      </div>
      <div className='nouveauteslivres'>
        <Book books={popularBooksSecondHalf} />
      </div>
    </div>
  );
}; 

export default Home;
