import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <nav className = 'navfooter'>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/planDuSite">Plan du site</Link>
                    </li>
                    <li>
                        <Link to="/mentionsLegales">Mentions Legales</Link>
                    </li>
                    <li>
                        <Link to="/gestionDesCookies">Gestion des cookies</Link>
                    </li>
                </nav>
        </footer>
    );
};

export default Footer;
  