const router = require('express').Router();

router.post('/', (request, response) => {
  response.json();
});

module.exports = router