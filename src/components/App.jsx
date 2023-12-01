import { Suspense, lazy } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../Pages/Home'));
const Catalog = lazy(() => import('../Pages/Catalog'));
const Favorites = lazy(() => import('../Pages/Favorites'));

function App () {
  return (
    <div className={css.App}>
      <header className={css.App_header}>
        <nav>
          <NavLink to="/"end>Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path='*' element={<Home/>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
export default App;
