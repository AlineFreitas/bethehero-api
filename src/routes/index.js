const router = require('express').Router();

router.use('/ngos', require('./ngos'));
router.use('/incidents', require('./incidents'));

router.get('/', (request, response) => {
  response.json({
    message: "Hello World!"
  });
});

module.exports = router;