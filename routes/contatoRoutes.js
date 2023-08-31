
const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.mostrarFormulario);
router.post('/enviar', contatoController.enviarMensagem);

module.exports = router;
