import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AnimesPendientesDetalle() {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await axios.get(`http://localhost:3001/api/animes`);
      const found = response.data.find((a) => a.id === parseInt(animeId));
      setAnime(found);
    };
    fetchAnime();
  }, [animeId]);

  if (!anime) return <div className="text-white p-4">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">{anime.title}</h2>
      <p className="text-gray-300 mb-6">{anime.description || 'Sin descripción'}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default AnimesPendientesDetalle;