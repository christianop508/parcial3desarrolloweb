import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JuegosPendientes() {
  const [games, setPeliculas] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const fetchPeliculas = async () => {
    const res = await axios.get('http://localhost:3001/api/peliculasPendientes');
    setPeliculas(res.data);
  };

  const handleAdd = async () => {
    if (!title || !description) return alert('Completa todos los campos');
    await axios.post('http://localhost:3001/api/peliculasPendientes', { title, description });
    setTitle('');
    setDescription('');
    fetchPeliculas();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/peliculasPendientes/${id}`);
    fetchPeliculas();
  };

  return (
    <div className="p-6 text-white min-h-screen bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Juegos Pendientes</h1>

      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Título"
          className="px-4 py-2 rounded bg-gray-800 text-white w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          className="px-4 py-2 rounded bg-gray-800 text-white w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Agregar Juego
        </button>
      </div>

      <ul className="space-y-2">
        {games.map((pelicula) => (
          <li
            key={pelicula.id}
            className="bg-gray-800 p-4 rounded flex justify-between items-center"
          >
            <Link to={`/juegospendientes/${pelicula.id}`} className="text-blue-400 hover:underline">
              {pelicula.title}
            </Link>
            <button
              onClick={() => handleDelete(pelicula.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JuegosPendientes;