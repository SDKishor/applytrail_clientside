import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './components/theme/themeProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import route from './routes/route.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={route} />
    </ThemeProvider>
  </StrictMode>
);
