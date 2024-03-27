const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/persons', personController.getAllPersons);
router.post('/persons', personController.createPerson);
router.get('/persons/:cpf', personController.getPersonByCPF);
router.put('/persons/:cpf', personController.updatePerson);
router.delete('/persons/:cpf', personController.deletePerson);

module.exports = router;