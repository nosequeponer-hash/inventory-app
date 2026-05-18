// server/src/routes/productos.routes.js

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/productos.controller');

router.get('/',    controller.getProductos);
router.get('/:id', controller.getProducto);

module.exports = router;
