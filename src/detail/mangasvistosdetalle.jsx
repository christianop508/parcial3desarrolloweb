import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MangasVistosDetalle() {
  const { gameId } = useParams();
  const [manga, setManga] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManga = async () => {
      const response = await axios.get(`http://localhost:3001/api/mangasvistos`);
      const found = response.data.find((m) => m.id === parseInt(gameId));
      setManga(found);
    };
    fetchManga();
  }, [gameId]);

  if (!manga) return <div className="text-white p-4">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">{manga.title}</h2>
      <p className="text-gray-300 mb-6">{manga.description || 'Sin descripción'}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default MangasVistosDetalle;