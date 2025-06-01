import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AnimesPendientes() {
  const [animes, setAnimes] = useState([]);
  const [nuevoAnime, setNuevoAnime] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const fetchAnimes = async () => {
    const response = await axios.get('http://localhost:3001/api/animes');
    setAnimes(response.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  const agregarAnime = async () => {
    if (!nuevoAnime.trim()) return;

    await axios.post('http://localhost:3001/api/animes', {
      title: nuevoAnime.trim(),
      description: descripcion.trim(),
    });

    setNuevoAnime('');
    setDescripcion('');
    fetchAnimes();
  };

  const eliminarAnime = async (id) => {
    await axios.delete(`http://localhost:3001/api/animes/${id}`);
    fetchAnimes();
  };

  const irADetalle = (id) => {
    navigate(`/animespendientes/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📺 Animes Pendientes</h1>

      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="text"
          value={nuevoAnime}
          onChange={(e) => setNuevoAnime(e.target.value)}
          placeholder="Nombre del anime"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80 h-24 resize-none"
        />
        <button
          onClick={agregarAnime}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="max-w-md mx-auto space-y-4">
        {animes.map((anime) => (
          <li
            key={anime.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            <span onClick={() => irADetalle(anime.id)} className="text-lg hover:underline">
              {anime.title}
            </span>
            <button
              onClick={() => eliminarAnime(anime.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimesPendientes;