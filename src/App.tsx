import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
