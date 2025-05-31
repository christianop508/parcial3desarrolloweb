const express = require('express');
const cors = require('cors');
const games = require('./data/games');
const completedGames = require('./data/gamesCompleted'); // ✅ NUEVO

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Juegos pendientes (ya existentes)
app.get('/api/juegos', (req, res) => {
  res.json(games);
});
app.post('/api/juegos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newGame = { id: games.length + 1, title, description };
  games.push(newGame);
  res.status(201).json(newGame);
});
app.delete('/api/juegos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = games.findIndex(game => game.id === id);
  if (index !== -1) {
    games.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Juego no encontrado' });
});

// ✅ NUEVO: Juegos Completados
app.get('/api/juegos-completados', (req, res) => {
  res.json(completedGames);
});
app.post('/api/juegos-completados', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newGame = { id: completedGames.length + 1, title, description };
  completedGames.push(newGame);
  res.status(201).json(newGame);
});
app.delete('/api/juegos-completados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = completedGames.findIndex(game => game.id === id);
  if (index !== -1) {
    completedGames.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Juego no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});