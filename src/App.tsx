import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto max-w-7xl">
        <Outlet />
        <Toaster />
      </main>

      <Footer />
    </>
  );
}

export default App;
