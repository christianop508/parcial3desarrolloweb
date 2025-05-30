import { useParams, Link } from 'react-router-dom';
import seriesvistas from '../data/seriesvistasdata';

export default function GameDetail6() {
  const { gameId } = useParams();
  const game = seriesvistas.find(g => g.id === gameId);

  if (!game) {
    return <div className="p-6 text-red-500">Juego no encontrado.</div>;
  }

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
      <img src={game.image} alt={game.title} className="w-64 rounded-lg shadow-lg mb-4" />
      <p className="text-lg mb-6">{game.description}</p>
      <Link to="/juegospendientes" className="text-blue-400 hover:underline">← Volver a la lista</Link>
    </div>
  );
}