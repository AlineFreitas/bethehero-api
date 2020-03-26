const router = require('express').Router();
const crypto = require('crypto');
const connection = require('../database/connection');

router.post('/', async(request, response) => {
  const { name, email, whatsapp_number, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString('HEX');

  await connection.table('ngos').insert({
    id,
    name,
    email,
    whatsapp_number,
    city,
    uf
  });

  return response.json(id);
});

router.get('/', async(request, response) => {
  const ngos = await connection.table('ngos').select('*');

  return response.json(ngos);
});

router.get('/:id', async(request, response) => {
  const id = request.params.id;

  const ngo = await connection.table('ngos').select('*').where('id', id);

  return response.json(ngo);
});

module.exports = router