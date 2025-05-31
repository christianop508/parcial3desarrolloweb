const express = require('express');
const cors = require('cors');
const games = require('./data/games');
const completedGames = require('./data/gamescompleted'); // ✅ NUEVO

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

app.get('/api/juegos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const juego = games.find(j => j.id === id);
  if (!juego) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }
  res.json(juego);
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

const peliculasPendientes = require('./data/peliculaspendientes');

// Obtener todas las películas pendientes
app.get('/api/peliculasPendientes', (req, res) => {
  res.json(peliculasPendientes);
});

// Agregar una nueva película pendiente
app.post('/api/peliculasPendientes', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }

  const newPelicula = {
    id: peliculasPendientes.length + 1,
    title,
    description,
  };

  peliculasPendientes.push(newPelicula);
  res.status(201).json(newPelicula);
});

// Eliminar película pendiente
app.delete('/api/peliculasPendientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = peliculasPendientes.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }

  peliculasPendientes.splice(index, 1);
  res.status(204).send();
});