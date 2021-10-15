'use strict'

const express = require('express');
const ProductoController = require('../controllers/productos');
const router = express.Router();

router.get('/prueba', ProductoController.prueba);
router.get('/productos', ProductoController.consultarProductos);
router.get('/producto/:id', ProductoController.consultarProductoId);
router.post('/productoNombre', ProductoController.consultarProductoNombre);
router.post('/producto', ProductoController.guardarProductos);
router.put('/producto/:id', ProductoController.actualizarProducto);
router.delete('/producto/:id', ProductoController.eliminarProducto);
module.exports = router;