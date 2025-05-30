import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import './assets/index.css';
import Login from './pages/Login';
import JuegosPendientes from './pages/JuegosPendientes';
import GameDetail from './detail/gamedetail';
import GameDetail2 from './detail/juegosjugadosdetalle';
import GameDetail3 from './detail/PeliculaDetalle';
import GameDetail4 from './detail/PeliculaVistaDetalle';
import GameDetail5 from './detail/seriespendientesdetalle';
import GameDetail6 from './detail/seriesvistasdetalle';
import GameDetail7 from './detail/animespendientesdetalle';
import GameDetail8 from './detail/animesvistosdetalle';
import GameDetail9 from './detail/mangaspendientesdetalle';
import GameDetail10 from './detail/mangasvistosdetalle';
import JuegosCompletados from './pages/JuegosCompletados';
import PeliculasPendientes from './pages/PeliculasPendientes';
import PeliculasVistas from './pages/PeliculasVistas';
import SeriesPendientes from './pages/SeriesPendientes';
import SeriesVistas from './pages/SeriesVistas';
import AnimesPendientes from './pages/AnimesPendientes';
import AnimesVistos from './pages/AnimesVistos';
import MangasPendientes from './pages/MangasPendientes';
import MangasVistos from './pages/MangasVistos';
import Navbar from './pages/Navbar';
import PeliculaDetalle from './detail/PeliculaDetalle';
import PeliculaVistaDetalle from './detail/PeliculaVistaDetalle';

import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const hideNavbarOnPaths = ['/']; // Aquí defines en qué rutas ocultar el Navbar

  const showNavbar = !hideNavbarOnPaths.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0); // para asegurar scroll arriba al cambiar de ruta (opcional)
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/JuegosPendientes" element={<JuegosPendientes />} />
        <Route path="/juegos/:gameId" element={<GameDetail />} />
        <Route path="/juegoscompletados/:gameId" element={<GameDetail2 />} />
        <Route path="/peliculaspendientes/:gameId" element={<GameDetail3 />} />
        <Route path="/peliculasvistas/:gameId" element={<GameDetail4 />} />
        <Route path="/seriespendientes/:gameId" element={<GameDetail5 />} />
        <Route path="/seriesvistas/:gameId" element={<GameDetail6 />} />
        <Route path="/animespendientes/:gameId" element={<GameDetail7 />} />
        <Route path="/animesvistos/:gameId" element={<GameDetail8 />} />
        <Route path="/mangaspendientes/:gameId" element={<GameDetail9 />} />
        <Route path="/mangasvistos/:gameId" element={<GameDetail10 />} />
        <Route path="/JuegosCompletados" element={<JuegosCompletados />} />
        <Route path="/PeliculasPendientes" element={<PeliculasPendientes />} />
        <Route path="/PeliculasVistas" element={<PeliculasVistas />} />
        <Route path="/SeriesPendientes" element={<SeriesPendientes />} />
        <Route path="/SeriesVistas" element={<SeriesVistas />} />
        <Route path="/AnimesPendientes" element={<AnimesPendientes />} />
        <Route path="/AnimesVistos" element={<AnimesVistos />} />
        <Route path="/MangasPendientes" element={<MangasPendientes />} />
        <Route path="/MangasVistos" element={<MangasVistos />} />
        <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
        <Route path="/peliculas-vistas/:id" element={<PeliculaVistaDetalle />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
