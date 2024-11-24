import HomePage from '@/pages/home_page/homePage';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';

const route = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <h1>404</h1>,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/projects',
          element: <h1>Projects</h1>,
        },
        {
          path: '/blogs',
          element: <h1>Blogs</h1>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default route;
