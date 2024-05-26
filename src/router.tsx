import { createBrowserRouter } from 'react-router-dom';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import EducationPage from './pages/EducationPage/EducationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      {
        path: '/experience',
        element: <ExperiencePage />,
      },
      {
        path: '/education',
        element: <EducationPage />,
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
