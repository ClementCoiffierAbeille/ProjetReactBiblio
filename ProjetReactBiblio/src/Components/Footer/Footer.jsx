import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'; // Import du style CSS pour le composant Footer
import GestionDesCookies from '../../pages/gestionDesCookies'; // Import du composant de gestion des cookies

// Définition du composant Footer
const Footer = () => {
    // État local pour gérer l'affichage du popup de gestion des cookies
    const [showCookiePopup, setShowCookiePopup] = useState(false);

    return (
        <footer className="footer">
            {/* Navigation dans le pied de page */}
            <nav className='navfooter'>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/plan-du-site">Plan du site</Link>
                </li>
                <li>
                    <Link to="/mentions-legales">Mentions Legales</Link>
                </li>
                <li>
                    {/* Lien pour afficher le popup de gestion des cookies */}
                    <Link to="#" onClick={() => setShowCookiePopup(true)}>Gestion des cookies</Link>
                </li>
            </nav>

            {/* Affichage du popup de gestion des cookies si showCookiePopup est vrai */}
            {showCookiePopup && (
                <div className="cookie-popup">
                    <div className="cookie-popup-content">
                        {/* Bouton pour fermer le popup */}
                        <button onClick={() => setShowCookiePopup(false)}>Fermer</button>
                        {/* Composant de gestion des cookies */}
                        <GestionDesCookies />
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer; 
