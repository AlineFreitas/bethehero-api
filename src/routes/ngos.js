const router = require('express').Router();
const ngoController = require('../controllers/ngo_controller');

router.post('/', ngoController.create);

router.get('/', ngoController.index);

router.get('/:id', ngoController.show);

router.get('/:id/incidents', ngoController.incidents);

module.exports = router