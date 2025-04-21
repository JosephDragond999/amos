const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getClientes);
router.get('/:dni', clienteController.getClienteByDni);
router.post('/', clienteController.createCliente);
router.put('/:dni', clienteController.updateCliente);
router.delete('/:dni', clienteController.deleteCliente);

module.exports = router;
