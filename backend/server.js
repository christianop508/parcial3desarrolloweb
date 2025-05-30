const express = require('express');
const cors = require('cors');
const games = require('./data/games');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // 👉 Para poder leer JSON en el body

// Obtener todos los juegos
app.get('/api/juegos', (req, res) => {
  res.json(games);
});

// Agregar un nuevo juego
app.post('/api/juegos', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'El título es requerido' });
  }

  const newGame = {
    id: games.length + 1,
    title,
  };

  games.push(newGame);
  res.status(201).json(newGame);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});