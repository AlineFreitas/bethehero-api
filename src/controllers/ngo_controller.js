const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
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
  },

  async index(request, response) {
    const ngos = await connection.table('ngos').select('*');
  
    return response.json(ngos);
  },

  async show(request, response) {
    const id = request.params.id;
  
    const ngo = await connection.table('ngos').select('*').where('id', id);
  
    return response.json(ngo);
  }
}