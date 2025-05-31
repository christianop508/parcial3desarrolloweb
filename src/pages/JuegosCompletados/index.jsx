import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JuegosCompletados() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/juegos-completados')
      .then(res => setGames(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/juegos-completados', { title, description })
      .then(res => {
        setGames([...games, res.data]);
        setTitle('');
        setDescription('');
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/juegos-completados/${id}`)
      .then(() => {
        setGames(games.filter(g => g.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Juegos Completados</h1>
      <form onSubmit={handleAdd} className="mb-8 flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Nombre del juego"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 placeholder-gray-400"
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Agregar
        </button>
      </form>

      <ul className="grid gap-4">
        {games.map((game) => (
          <li key={game.id} className="bg-gray-800 p-4 rounded shadow-md flex justify-between items-center">
            <Link to={`/juegoscompletados/${game.id}`} className="text-blue-400 hover:underline">
              {game.title}
            </Link>
            <button
              onClick={() => handleDelete(game.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JuegosCompletados;