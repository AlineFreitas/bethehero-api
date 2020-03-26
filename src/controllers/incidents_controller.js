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
  },

  async delete(request, response){
    const { id } = request.params;
    const ngo_id = request.headers.authorization;

    const incident_ngo_id = await connection('incidents')
      .select('ngo_id')
      .where('id', id)
      .first();

    if (incident_ngo_id ==! ngo_id) {
      return response.status(401).json();
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return response.status(204).send();
  },
}