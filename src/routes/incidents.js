const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const incidentsController = require('../controllers/incidents_controller')

router.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().max(150),
    description: Joi.string().required(),
    value: Joi.number().required(),
    ong_id: Joi.string().required(),
  })
}), incidentsController.create);

router.get('/', celebrate({
    [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
  }),incidentsController.index);

router.delete('/:id', celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
  }).unknown()
}), incidentsController.delete);

module.exports= router;