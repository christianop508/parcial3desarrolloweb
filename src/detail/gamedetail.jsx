// src/pages/JuegosPendientes/GameDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GameDetail() {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`http://localhost:3001/api/juegos/${gameId}`);
      setGame(response.data);
    };
    fetchGame();
  }, [gameId]);

  if (!game) return <div className="text-white p-4">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
      <p className="text-gray-300 mb-6">{game.description || 'Sin descripción'}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default GameDetail;
