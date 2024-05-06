import React from 'react';

const PlanDuSite = () => {
    return (
        <div className="plan-du-site">
            <h1>Plan du site</h1>
            <ul>
                <li>
                    <a href="/">Accueil</a>
                    <ul>
                        <li><a href="/actualites">Actualités</a></li>
                        <li><a href="/evenements">Événements</a></li>
                        <li><a href="/nouveautes">Nouveautés</a></li>
                        <li><a href="/plus-empruntes">Les plus empruntés</a></li>
                        <li><a href="/coups-de-coeur">Nos coups de cœur</a></li>
                    </ul>
                </li>
                <li><a href="/horaires">Horaires</a></li>
                <li><a href="/favoris">Favoris</a></li>
                <li><a href="/emprunts">Emprunts</a></li>
                <li><a href="/connexion">Connexion</a></li>
                <li><a href="/recherche">Recherche</a></li>
            </ul>
            <ul>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/plan-du-site">Plan du site</a></li>
                <li><a href="/mentions-legales">Mentions légales</a></li>
            </ul>
        </div>
    );
};

export default PlanDuSite;
