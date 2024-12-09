import { createBrowserRouter } from 'react-router-dom';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import EducationPage from './pages/EducationPage/EducationPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import { baseRoute } from './utils/env';

export const router = createBrowserRouter([
  {
    path: baseRoute,
    element: <Root />,
    children: [
      {
        path: baseRoute,
        element: <HomePage />,
      },
      {
        path: `${baseRoute}about`,
        element: <AboutPage />,
      },
      {
        path: `${baseRoute}contacts`,
        element: <ContactsPage />,
      },
      {
        path: `${baseRoute}experience`,
        element: <ExperiencePage />,
      },
      {
        path: `${baseRoute}education`,
        element: <EducationPage />,
      },
      {
        path: `${baseRoute}skills`,
        element: <SkillsPage />,
      },
    ],
  },
]);

export default function Root() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
