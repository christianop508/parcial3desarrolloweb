import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex gap-6 relative">

        {/* Sección Juegos */}
        <div className="group relative">
          <button className="hover:bg-gray-700 px-4 py-2 rounded transition">
            Juegos
          </button>
          <div className="absolute top-full left-0 w-40 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
            <button
              onClick={() => navigate('/JuegosPendientes')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Juegos Pendientes
            </button>
            <button
              onClick={() => alert('Juegos Vistos')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Juegos Vistos
            </button>
          </div>
        </div>

        {/* Sección Películas */}
        <div className="group relative">
          <button className="hover:bg-gray-700 px-4 py-2 rounded transition">
            Películas
          </button>
          <div className="absolute top-full left-0 w-40 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
            <button
              onClick={() => alert('Películas Pendientes')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Películas Pendientes
            </button>
            <button
              onClick={() => alert('Películas Vistas')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Películas Vistas
            </button>
          </div>
        </div>

        {/* Sección Series */}
        <div className="group relative">
          <button className="hover:bg-gray-700 px-4 py-2 rounded transition">
            Series
          </button>
          <div className="absolute top-full left-0 w-40 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
            <button
              onClick={() => alert('Series Pendientes')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Series Pendientes
            </button>
            <button
              onClick={() => alert('Series Vistas')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Series Vistas
            </button>
          </div>
        </div>

        {/* Sección Animes */}
        <div className="group relative">
          <button className="hover:bg-gray-700 px-4 py-2 rounded transition">
            Animes
          </button>
          <div className="absolute top-full left-0 w-40 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
            <button
              onClick={() => alert('Animes Pendientes')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Animes Pendientes
            </button>
            <button
              onClick={() => alert('Animes Vistos')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Animes Vistos
            </button>
          </div>
        </div>

        {/* Sección Mangas */}
        <div className="group relative">
          <button className="hover:bg-gray-700 px-4 py-2 rounded transition">
            Mangas
          </button>
          <div className="absolute top-full left-0 w-40 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
            <button
              onClick={() => alert('Mangas Pendientes')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Mangas Pendientes
            </button>
            <button
              onClick={() => alert('Mangas Vistos')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Mangas Vistos
            </button>
          </div>
        </div>
      </div>

      {/* Botón Cerrar Sesión */}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}

export default Navbar;