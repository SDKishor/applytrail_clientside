import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
