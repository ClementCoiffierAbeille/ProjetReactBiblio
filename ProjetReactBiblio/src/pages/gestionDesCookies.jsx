import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Définition du composant GestionDesCookies
const GestionDesCookies = () => {
  // État local pour gérer l'affichage du popup de gestion des cookies
  const [showPopup, setShowPopup] = useState(false);

  // État local pour stocker les paramètres des cookies
  const [cookieSettings, setCookieSettings] = useState({
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Fonction pour sauvegarder les paramètres des cookies dans le stockage local
  const saveCookieSettings = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings)); // Stockage des paramètres des cookies dans le stockage local
    setShowPopup(false); // Masquage du popup de gestion des cookies
  };

  // Fonction pour charger les paramètres des cookies depuis le stockage local
  const loadCookieSettings = () => {
    const savedSettings = localStorage.getItem('cookieSettings'); // Récupération des paramètres des cookies depuis le stockage local
    if (savedSettings) {
      setCookieSettings(JSON.parse(savedSettings)); // Mise à jour des paramètres des cookies avec les données récupérées
    }
  };

  // Effet de side-effect pour charger les paramètres des cookies lors du premier rendu
  React.useEffect(() => {
    loadCookieSettings();
  }, []);

  // Rendu du composant GestionDesCookies
  return (
    <div>

      <button onClick={() => setShowPopup(true)}>Gérer les cookies</button>
      
 
      <h1>Gestion des cookies</h1>
        <p>
            Les cookies sont de petits fichiers texte qui sont stockés sur votre ordinateur ou appareil mobile
            lorsque vous visitez un site Web. Ils sont largement utilisés pour améliorer votre expérience de
            navigation en mémorisant vos préférences et en fournissant des fonctionnalités telles que la
            connexion automatique ou le suivi des interactions avec le site.
        </p>
        <p>
            Nous utilisons des cookies sur notre site pour diverses raisons, notamment pour comprendre comment
            vous utilisez notre site, pour personnaliser votre expérience et pour vous montrer des publicités
            pertinentes. En utilisant notre site, vous consentez à l'utilisation de ces cookies conformément à
            notre politique de confidentialité et de gestion des cookies.
        </p>
        <p>
            Si vous souhaitez modifier vos préférences en matière de cookies ou en savoir plus sur la manière
            dont nous utilisons les cookies, veuillez consulter notre politique de confidentialité et de gestion
            des cookies.
        </p>
        <p>
            Pour en savoir plus sur les cookies et sur la manière de les gérer et de les supprimer, visitez
            le site Web de la Commission nationale de l'informatique et des libertés (CNIL) ou l'aide de votre
            navigateur Web.
        </p>


      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Paramètres des cookies</h2>
            <label>
              <input
                type="checkbox"
                checked={cookieSettings.analytics}
                onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
              />
              Analytique
            </label>
            <label>
              <input
                type="checkbox"
                checked={cookieSettings.marketing}
                onChange={(e) => setCookieSettings({ ...cookieSettings, marketing: e.target.checked })}
              />
              Marketing
            </label>
            <label>
              <input
                type="checkbox"
                checked={cookieSettings.preferences}
                onChange={(e) => setCookieSettings({ ...cookieSettings, preferences: e.target.checked })}
              />
              Préférences
            </label>
            <div className="popup-buttons">
              <button onClick={saveCookieSettings}>Sauvegarder</button>
              <button onClick={() => setShowPopup(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionDesCookies;


