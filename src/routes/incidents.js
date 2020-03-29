const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const incidentsController = require('../controllers/incidents_controller')

router.post('/', incidentsController.create);
router.get('/', celebrate({
    [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
  }),incidentsController.index);
router.delete('/:id', incidentsController.delete);

module.exports= router;