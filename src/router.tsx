import { createBrowserRouter } from 'react-router-dom';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import EducationPage from './pages/EducationPage/EducationPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';

const base = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';

export const router = createBrowserRouter([
  {
    path: base,
    element: <Root />,
    children: [
      {
        path: base,
        element: <HomePage />,
      },
      {
        path: `${base}about`,
        element: <AboutPage />,
      },
      {
        path: `${base}contacts`,
        element: <ContactsPage />,
      },
      {
        path: `${base}experience`,
        element: <ExperiencePage />,
      },
      {
        path: `${base}education`,
        element: <EducationPage />,
      },
      {
        path: `${base}skills`,
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
