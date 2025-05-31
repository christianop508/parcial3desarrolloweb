import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function JuegosPendientes() {
  const [juegos, setJuegos] = useState([]);
  const [nuevoJuego, setNuevoJuego] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const fetchJuegos = async () => {
    const response = await axios.get('http://localhost:3001/api/juegos');
    setJuegos(response.data);
  };

  useEffect(() => {
    fetchJuegos();
  }, []);

  const agregarJuego = async () => {
    if (!nuevoJuego.trim()) return;

    await axios.post('http://localhost:3001/api/juegos', {
      title: nuevoJuego.trim(),
      description: descripcion.trim(),
    });

    setNuevoJuego('');
    setDescripcion('');
    fetchJuegos();
  };

  const eliminarJuego = async (id) => {
    await axios.delete(`http://localhost:3001/api/juegos/${id}`);
    fetchJuegos();
  };

  const irADetalle = (id) => {
    navigate(`/juegos/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎮 Juegos Pendientes</h1>

      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="text"
          value={nuevoJuego}
          onChange={(e) => setNuevoJuego(e.target.value)}
          placeholder="Nombre del juego"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80 h-24 resize-none"
        />
        <button
          onClick={agregarJuego}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="max-w-md mx-auto space-y-4">
        {juegos.map((juego) => (
          <li
            key={juego.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            <span onClick={() => irADetalle(juego.id)} className="text-lg hover:underline">
              {juego.title}
            </span>
            <button
              onClick={() => eliminarJuego(juego.id)}
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

export default JuegosPendientes;