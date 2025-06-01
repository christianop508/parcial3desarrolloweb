import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MangasPendientes() {
  const [mangas, setMangas] = useState([]);
  const [nuevoManga, setNuevoManga] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const fetchMangas = async () => {
    const response = await axios.get('http://localhost:3001/api/mangaspendientes');
    setMangas(response.data);
  };

  useEffect(() => {
    fetchMangas();
  }, []);

  const agregarManga = async () => {
    if (!nuevoManga.trim()) return;

    await axios.post('http://localhost:3001/api/mangaspendientes', {
      title: nuevoManga.trim(),
      description: descripcion.trim(),
    });

    setNuevoManga('');
    setDescripcion('');
    fetchMangas();
  };

  const eliminarManga = async (id) => {
    await axios.delete(`http://localhost:3001/api/mangaspendientes/${id}`);
    fetchMangas();
  };

  const irADetalle = (id) => {
    navigate(`/mangaspendientes/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Mangas Pendientes</h1>

      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="text"
          value={nuevoManga}
          onChange={(e) => setNuevoManga(e.target.value)}
          placeholder="Nombre del manga"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80 h-24 resize-none"
        />
        <button
          onClick={agregarManga}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="max-w-md mx-auto space-y-4">
        {mangas.map((manga) => (
          <li
            key={manga.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            <span onClick={() => irADetalle(manga.id)} className="text-lg hover:underline">
              {manga.title}
            </span>
            <button
              onClick={() => eliminarManga(manga.id)}
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

export default MangasPendientes;