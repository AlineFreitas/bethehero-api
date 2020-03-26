const router = require('express').Router();
const incidentsController = require('../controllers/incidents_controller')

router.post('/', incidentsController.create);

module.exports= router;