import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PeliculasVistas() {
  const [peliculas, setPeliculas] = useState([]);
  const [nuevaPelicula, setNuevaPelicula] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const fetchPeliculas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/peliculasvistas');
      setPeliculas(response.data);
    } catch (error) {
      console.error('Error al obtener películas vistas:', error);
    }
  };

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const agregarPelicula = async () => {
    if (!nuevaPelicula.trim()) return;

    try {
      await axios.post('http://localhost:3001/api/peliculasvistas', {
        title: nuevaPelicula.trim(),
        description: descripcion.trim(),
      });
      setNuevaPelicula('');
      setDescripcion('');
      fetchPeliculas();
    } catch (error) {
      console.error('Error al agregar película:', error);
    }
  };

  const eliminarPelicula = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/peliculasvistas/${id}`);
      fetchPeliculas();
    } catch (error) {
      console.error('Error al eliminar película:', error);
    }
  };

  const irADetalle = (id) => {
    navigate(`/peliculasvistas/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎥 Películas Vistas</h1>

      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Título de la película"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80 h-24 resize-none"
        />
        <button
          onClick={agregarPelicula}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="max-w-md mx-auto space-y-4">
        {peliculas.map((pelicula) => (
          <li
            key={pelicula.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            <span onClick={() => irADetalle(pelicula.id)} className="text-lg hover:underline">
              {pelicula.title}
            </span>
            <button
              onClick={() => eliminarPelicula(pelicula.id)}
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

export default PeliculasVistas;