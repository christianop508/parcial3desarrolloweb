import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GameDetail2() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/juegos-completados')
      .then(res => {
        const selected = res.data.find(g => g.id === parseInt(gameId));
        setGame(selected);
      })
      .catch(err => console.error(err));
  }, [gameId]);

  if (!game) {
    return <p className="text-white p-8">Cargando...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
      <p className="text-gray-300 mb-8">{game.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        Volver
      </button>
    </div>
  );
}

export default GameDetail2;