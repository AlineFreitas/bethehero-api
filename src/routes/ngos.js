const router = require('express').Router();
const crypto = require('crypto');
const connection = require('../database/connection');

router.post('/', async(request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString('HEX');

  await connection.table('ngos').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  return response.json(id);
});

module.exports = router