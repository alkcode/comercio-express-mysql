'use strict'
const express = require('express');

const ProveedorController = require('../controllers/proveedores');
const router = express.Router();

router.get('/pru', ProveedorController.pru);
router.post('/proveedor', ProveedorController.registrarProveedor);
router.get('/proveedores', ProveedorController.consultarProveedores);
router.get('/proveedor/:id', ProveedorController.consultarProveedorId);
router.post('/proveedorNombre', ProveedorController.consultarProveedorNombre);
router.put('/proveedor/:id', ProveedorController.actualizarProveedor);
router.delete('/proveedor/:id', ProveedorController.eliminarProveedor);

module.exports = router;

