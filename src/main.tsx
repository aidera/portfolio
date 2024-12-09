import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import StoreProvider from './store/StoreProvider.tsx';
import { router } from './router.tsx';
import './assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
