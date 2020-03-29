const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const ngoController = require('../controllers/ngo_controller');

router.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp_number: Joi.number().required().min(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
    })
  }),ngoController.create);

router.get('/', ngoController.index);

router.get('/:id', ngoController.show);

router.get('/:id/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), ngoController.incidents);

module.exports = router