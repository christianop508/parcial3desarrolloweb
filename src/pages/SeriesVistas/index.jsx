import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SeriesVistas() {
  const [series, setSeries] = useState([]);
  const [nuevaSerie, setNuevaSerie] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const fetchSeries = async () => {
    const response = await axios.get('http://localhost:3001/api/series-vistas');
    setSeries(response.data);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const agregarSerie = async () => {
    if (!nuevaSerie.trim()) return;

    await axios.post('http://localhost:3001/api/series-vistas', {
      title: nuevaSerie.trim(),
      description: descripcion.trim(),
    });

    setNuevaSerie('');
    setDescripcion('');
    fetchSeries();
  };

  const eliminarSerie = async (id) => {
    await axios.delete(`http://localhost:3001/api/series-vistas/${id}`);
    fetchSeries();
  };

  const irADetalle = (id) => {
    navigate(`/seriesvistas/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📺 Series Vistas</h1>

      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="text"
          value={nuevaSerie}
          onChange={(e) => setNuevaSerie(e.target.value)}
          placeholder="Nombre de la serie"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="px-4 py-2 rounded bg-gray-800 text-white w-80 h-24 resize-none"
        />
        <button
          onClick={agregarSerie}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="max-w-md mx-auto space-y-4">
        {series.map((serie) => (
          <li
            key={serie.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            <span onClick={() => irADetalle(serie.id)} className="text-lg hover:underline">
              {serie.title}
            </span>
            <button
              onClick={() => eliminarSerie(serie.id)}
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

export default SeriesVistas;