const router = require('express').Router();

router.use('/ngos', require('./ngos'));

router.get('/', (request, response) => {
  response.json({
    message: "Hello World!"
  });
});

module.exports = router;