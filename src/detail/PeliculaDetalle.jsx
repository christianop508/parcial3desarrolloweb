import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function GameDetail3() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/peliculasPendientes')
      .then(res => {
        const found = res.data.find(p => p.id === parseInt(gameId));
        setPelicula(found);
      });
  }, [gameId]);

  if (!pelicula) return <div className="text-white p-6">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-400 hover:underline">
        ← Volver
      </button>
      <h1 className="text-3xl font-bold mb-2">{pelicula.title}</h1>
      <p className="text-gray-300">{pelicula.description}</p>
    </div>
  );
}

export default GameDetail3;