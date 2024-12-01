import HomePage from '@/pages/home_page/homePage';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '@/pages/dashboard/dashboardPage';
import { DashboardHome } from '@/pages/dashboardHomePage/dashboardHomepage';
import { AllApplicationPage } from '@/pages/all_application_Page/allApplicationPage';
import { ProfilePage } from '@/pages/profile_page/profilePage';
import { SettingPage } from '@/pages/setting_page/settingPage';
import { ReminderPage } from '@/pages/reminder_page/reminderPage';
import BlogPage from '@/pages/blog_page/blogPage';
import { AnalyticsPage } from '@/pages/analytics_page/analyticsPage';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Login } from '@/pages/authPage/login';
import { Signup } from '@/pages/authPage/signup';

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
          element: (
            <ProtectedRoute isAuthenticated={true}>
              <DashboardPage />
            </ProtectedRoute>
          ),
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
              path: 'analytics',
              element: <AnalyticsPage />,
            },
            {
              path: 'reminders',
              element: <ReminderPage />,
            },
            {
              path: 'profile',
              element: <ProfilePage />,
            },
            {
              path: 'settings',
              element: <SettingPage />,
            },
          ],
        },
        {
          path: 'blogs',
          element: <BlogPage />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'signup',
          element: <Signup />,
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
