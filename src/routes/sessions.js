const router = require('express').Router();
const sessionsController = require('../controllers/sessions_controller');

router.post('/', sessionsController.create);

module.exports = router;