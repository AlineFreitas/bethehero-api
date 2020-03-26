const router = require('express').Router();
const incidentsController = require('../controllers/incidents_controller')

router.post('/', incidentsController.create);
router.get('/', incidentsController.index);

module.exports= router;