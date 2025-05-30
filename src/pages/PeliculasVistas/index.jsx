import { Link } from 'react-router-dom';
import peliculas from '../../data/peliculasvistasdata';

export default function PeliculasVistas() {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Películas Vistas</h1>
      <ul className="space-y-4">
        {peliculas.map((pelicula) => (
          <li key={pelicula.id}>
            <Link
              to={`/peliculasvistas/${pelicula.id}`}
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              {pelicula.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}