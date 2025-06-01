import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PeliculaVistaDetalle() {
  const { gameId } = useParams(); // 👈 Este sigue siendo gameId por consistencia con las rutas
  const [pelicula, setPelicula] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPelicula = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/peliculasvistas/${gameId}`);
        setPelicula(response.data);
      } catch (error) {
        console.error('Error al cargar la película:', error);
      }
    };
    fetchPelicula();
  }, [gameId]);

  if (!pelicula) return <div className="text-white p-4">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">{pelicula.title}</h2>
      <p className="text-gray-300 mb-6">{pelicula.description || 'Sin descripción'}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default PeliculaVistaDetalle;