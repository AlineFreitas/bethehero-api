const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.send("You've reached GET /users endpoint")
});

module.exports = router