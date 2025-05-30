import { Link } from 'react-router-dom';
import mangasvistos from '../../data/mangasvistosdata';

export default function JuegosPendientes() {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Mangas Vistos</h1>
      <ul className="space-y-4">
        {mangasvistos.map((game) => (
          <li key={game.id}>
            <Link
              to={`/mangasvistos/${game.id}`}
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              {game.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}