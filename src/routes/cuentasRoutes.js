const express = require('express');
const router = express.Router();
const controller = require('../controllers/controladorCuentas');

// Rutas
router.get('/', controller.obtenerCuentas);
router.get('/balance', controller.obtenerBalanceTotal);
router.get('/:id', controller.obtenerCuentaPorId);
router.get('/buscar/query', controller.buscarCuentas);

module.exports = router;
