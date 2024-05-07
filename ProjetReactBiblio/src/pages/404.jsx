import { useRouteError } from "react-router-dom"; // Importation du hook useRouteError pour récupérer les détails de l'erreur de route

// Définition du composant ErrorPage
export default function ErrorPage() {
  // Utilisation du hook useRouteError pour obtenir les détails de l'erreur de route
  const error = useRouteError();

  // Rendu de la page d'erreur
  return (
    <div id="error-page">
      <h1>404</h1> {/* Titre de l'erreur indiquant le code d'erreur 404 */}
      <p>Page not found 😭</p> {/* Message indiquant que la page n'a pas été trouvée */}
      <p>{error.message}</p> {/* Affichage du message d'erreur de la route */}
      <p>
        <i>{error.statusText || error.message}</i> {/* Affichage du texte de statut de l'erreur ou du message d'erreur */}
      </p>
    </div>
  );
}
