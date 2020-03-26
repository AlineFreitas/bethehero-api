const router = require('express').Router();
const incidentsController = require('../controllers/incidents_controller')

router.post('/', incidentsController.create);
router.get('/', incidentsController.index);
router.delete('/:id', incidentsController.delete);

module.exports= router;