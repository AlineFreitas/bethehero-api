const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/ngos', require('./ngos'));

router.get('/', (request, response) => {
  response.json({
    message: "Hello World!"
  });
});

module.exports = router;