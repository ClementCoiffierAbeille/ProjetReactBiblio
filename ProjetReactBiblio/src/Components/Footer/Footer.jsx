import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import GestionDesCookies from '../../pages/gestionDesCookies'; 

const Footer = () => {
    const [showCookiePopup, setShowCookiePopup] = useState(false);

    return (
        <footer className="footer">
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
                    {/* Utilisation d'un gestionnaire d'événements pour ouvrir la popup */}
                    <Link to="#" onClick={() => setShowCookiePopup(true)}>Gestion des cookies</Link>
                </li>
            </nav>

            {/* Popup pour gérer les cookies */}
            {showCookiePopup && (
                <div className="cookie-popup">
                    <div className="cookie-popup-content">
                        <button onClick={() => setShowCookiePopup(false)}>Fermer</button>
                        <GestionDesCookies />
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
