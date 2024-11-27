import HomePage from '@/pages/home_page/homePage';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '@/pages/dashboard/dashboardPage';
import { DashboardHome } from '@/pages/dashboardHomePage/dashboardHomepage';
import { AllApplicationPage } from '@/pages/all_application_Page/allApplicationPage';

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
          path: 'dashboard',
          element: <DashboardPage />,
          children: [
            {
              index: true,
              element: <DashboardHome />,
            },
            {
              path: 'applications',
              element: <AllApplicationPage />,
            },
            {
              path: 'profile',
              element: <h1>Profile</h1>,
            },
            {
              path: 'settings',
              element: <h1>Settings</h1>,
            },
          ],
        },
        {
          path: 'blogs',
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
