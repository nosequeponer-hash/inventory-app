// server/src/controllers/productos.controller.js

const productosService = require('../services/productos.service');

const getProductos = (req, res) => {
  res.status(200).json(productosService.obtenerTodos());
};

const getProducto = (req, res, next) => {
  try {
    const producto = productosService.obtenerPorId(req.params.id);
    res.status(200).json(producto);
  } catch (err) {
    next(err);
  }
};

module.exports = { getProductos, getProducto };
