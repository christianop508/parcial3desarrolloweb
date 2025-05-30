const express = require('express');
const cors = require('cors');

const games = require('./data/games');
const peliculas = require('./data/peliculas');
const series = require('./data/series');
const animes = require('./data/animes');
const mangas = require('./data/mangas');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Para poder leer JSON en el body

// ============================
// Juegos
// ============================
app.get('/api/juegos', (req, res) => {
  res.json(games);
});

app.post('/api/juegos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });

  const newItem = { id: games.length + 1, title };
  games.push(newItem);
  res.status(201).json(newItem);
});

// ============================
// Películas
// ============================
app.get('/api/peliculas', (req, res) => {
  res.json(peliculas);
});

app.post('/api/peliculas', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });

  const newItem = { id: peliculas.length + 1, title };
  peliculas.push(newItem);
  res.status(201).json(newItem);
});

// ============================
// Series
// ============================
app.get('/api/series', (req, res) => {
  res.json(series);
});

app.post('/api/series', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });

  const newItem = { id: series.length + 1, title };
  series.push(newItem);
  res.status(201).json(newItem);
});

// ============================
// Animes
// ============================
app.get('/api/animes', (req, res) => {
  res.json(animes);
});

app.post('/api/animes', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });

  const newItem = { id: animes.length + 1, title };
  animes.push(newItem);
  res.status(201).json(newItem);
});

// ============================
// Mangas
// ============================
app.get('/api/mangas', (req, res) => {
  res.json(mangas);
});

app.post('/api/mangas', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });

  const newItem = { id: mangas.length + 1, title };
  mangas.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});