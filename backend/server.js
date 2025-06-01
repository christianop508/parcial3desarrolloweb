const express = require('express');
const cors = require('cors');
const games = require('./data/games');
const completedGames = require('./data/gamescompleted');
const peliculasVistas = require('./data/peliculasvistas');
const seriesPendientes = require('./data/series');
const seriesVistas = require('./data/seriesVistas');
const animes = require('./data/animes');
const animesVistos = require('./data/animesvistos');
const mangasPendientes = require('./data/mangaspendientes');
const mangasVistos = require('./data/mangasvistos');

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

// Obtener todas las películas vistas
app.get('/api/peliculasvistas', (req, res) => {
  res.json(peliculasVistas);
});

// Agregar una película vista
app.post('/api/peliculasvistas', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newMovie = { id: peliculasVistas.length + 1, title, description };
  peliculasVistas.push(newMovie);
  res.status(201).json(newMovie);
});

// Eliminar una película vista
app.delete('/api/peliculasvistas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = peliculasVistas.findIndex(movie => movie.id === id);
  if (index !== -1) {
    peliculasVistas.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Película no encontrada' });
});

// ✅ Ruta para obtener detalle por ID
app.get('/api/peliculasvistas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = peliculasVistas.find(m => m.id === id);
  if (!movie) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }
  res.json(movie);
});

app.get('/api/seriespendientes', (req, res) => {
  res.json(seriesPendientes);
});

app.post('/api/seriespendientes', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción requeridos' });
  }
  const nuevaSerie = {
    id: seriesPendientes.length + 1,
    title,
    description,
  };
  seriesPendientes.push(nuevaSerie);
  res.status(201).json(nuevaSerie);
});

app.delete('/api/seriespendientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = seriesPendientes.findIndex((serie) => serie.id === id);
  if (index !== -1) {
    seriesPendientes.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Serie no encontrada' });
});

app.get('/api/seriespendientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const serie = seriesPendientes.find((s) => s.id === id);
  if (serie) {
    res.json(serie);
  } else {
    res.status(404).json({ error: 'Serie no encontrada' });
  }
});

app.get('/api/series-vistas', (req, res) => {
  res.json(seriesVistas);
});

app.post('/api/series-vistas', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newSerie = { id: seriesVistas.length + 1, title, description };
  seriesVistas.push(newSerie);
  res.status(201).json(newSerie);
});

app.delete('/api/series-vistas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = seriesVistas.findIndex(s => s.id === id);
  if (index !== -1) {
    seriesVistas.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Serie no encontrada' });
});

app.get('/api/animes', (req, res) => {
  res.json(animes);
});

app.post('/api/animes', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newAnime = { id: animes.length + 1, title, description };
  animes.push(newAnime);
  res.status(201).json(newAnime);
});

app.delete('/api/animes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = animes.findIndex(anime => anime.id === id);
  if (index !== -1) {
    animes.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Anime no encontrado' });
});

app.get('/api/animesvistos', (req, res) => {
  res.json(animesVistos);
});

app.post('/api/animesvistos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newAnime = { id: animesVistos.length + 1, title, description };
  animesVistos.push(newAnime);
  res.status(201).json(newAnime);
});

app.delete('/api/animesvistos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = animesVistos.findIndex(anime => anime.id === id);
  if (index !== -1) {
    animesVistos.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Anime no encontrado' });
});

app.get('/api/mangaspendientes', (req, res) => {
  res.json(mangasPendientes);
});

app.post('/api/mangaspendientes', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newManga = { id: mangasPendientes.length + 1, title, description };
  mangasPendientes.push(newManga);
  res.status(201).json(newManga);
});

app.delete('/api/mangaspendientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = mangasPendientes.findIndex(manga => manga.id === id);
  if (index !== -1) {
    mangasPendientes.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Manga no encontrado' });
});

app.get('/api/mangasvistos', (req, res) => {
  res.json(mangasVistos);
});

app.post('/api/mangasvistos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Título y descripción son requeridos' });
  }
  const newManga = { id: mangasVistos.length + 1, title, description };
  mangasVistos.push(newManga);
  res.status(201).json(newManga);
});

app.delete('/api/mangasvistos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = mangasVistos.findIndex(manga => manga.id === id);
  if (index !== -1) {
    mangasVistos.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Manga no encontrado' });
});