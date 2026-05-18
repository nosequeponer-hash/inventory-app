// server/src/index.js
// Servidor Express de Mercabuena.

const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Logger
app.use((req, res, next) => {
  res.on('finish', () => console.log(`[${req.method}] ${req.originalUrl} - ${res.statusCode}`));
  next();
});

// Rutas
app.use('/api/v1/productos', require('./routes/productos.routes'));
app.use('/api/v1/categorias', require('./routes/categorias.routes'));

app.get('/', (req, res) => res.json({ mensaje: 'Mercabuena API 🛒' }));

// Manejador de errores
app.use((err, req, res, next) => {
  if (err.message === 'NOT_FOUND') return res.status(404).json({ error: 'No encontrado' });
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => console.log(`Servidor Mercabuena en http://localhost:${PORT}`));
