// server/src/routes/categorias.routes.js

const express = require('express');
const router  = express.Router();

const categorias = [
  { id: 1, nombre: 'Frutas y verduras', emoji: '🍎' },
  { id: 2, nombre: 'Lácteos', emoji: '🥛' },
  { id: 3, nombre: 'Panadería', emoji: '🍞' },
  { id: 4, nombre: 'Carnes', emoji: '🥩' },
  { id: 5, nombre: 'Bebidas', emoji: '🥤' },
];

router.get('/', (req, res) => res.status(200).json(categorias));

module.exports = router;
