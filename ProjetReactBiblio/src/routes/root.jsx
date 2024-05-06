import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import ErrorPage from '../pages/404.jsx';
import Home from '../pages/home.jsx';
import MentionLegales from '../pages/mentionsLegales.jsx';
import DetailLivre from '../pages/detailLivre.jsx';
import Search from '../Components/Search/Search.jsx'; // Importez le composant Search
import PlanDuSite from '../pages/planDuSite.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'mentions-legales', element: <MentionLegales /> },
      { path: 'gestion-des-cookies', element: <gestionDesCookies /> },
      { path: 'plan-du-site', element: <PlanDuSite/> },
      { path: 'detail-livre/:id', element: <DetailLivre /> },
      { path: 'search', element: <Search /> }, // Ajoutez la route vers la page de recherche
    ],
  },
]);

export default router;
