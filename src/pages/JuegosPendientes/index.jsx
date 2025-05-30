import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function JuegosPendientes() {
  const [games, setGames] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/juegos')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleAddGame = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const response = await fetch('http://localhost:3001/api/juegos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle }),
    });

    if (response.ok) {
      const addedGame = await response.json();
      setGames([...games, addedGame]);
      setNewTitle('');
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Juegos Pendientes</h1>

      <form onSubmit={handleAddGame} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Nuevo juego"
          className="p-2 rounded text-black"
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Agregar
        </button>
      </form>

      <ul className="space-y-4">
        {games.map((game) => (
          <li key={game.id}>
            <Link
              to={`/juegos/${game.id}`}
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              {game.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}