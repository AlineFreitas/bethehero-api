const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { title, description, value } = request.body;
    const ngo_id = request.headers.authorization;

    const [id] = await connection.table('incidents').insert({
      title,
      description,
      value,
      ngo_id
    });

    return response.json( {id} );
  },

  async index(request, response){
    const incidents = await connection.table('incidents').select('*');

    return response.json(incidents);
  }
}