const db = require('../config/db');

class ClienteModel {
  async getAllClientes() {
    const result = await db.query('SELECT * FROM cliente ORDER BY dni DESC');
    return result.rows;
  }

  async getClienteByDni(dni) {
    const result = await db.query('SELECT * FROM cliente WHERE dni = $1', [dni]);
    return result.rows[0];
  }

  async createCliente({ dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
    const result = await db.query(
      `INSERT INTO cliente (dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento]
    );
    return result.rows[0];
  }

  async updateCliente(dni, { nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
    const result = await db.query(
      `UPDATE cliente SET 
        nombre = $1, 
        apellido_paterno = $2, 
        apellido_materno = $3, 
        fecha_nacimiento = $4 
       WHERE dni = $5 RETURNING *`,
      [nombre, apellido_paterno, apellido_materno, fecha_nacimiento, dni]
    );
    return result.rows[0];
  }

  async deleteCliente(dni) {
    await db.query('DELETE FROM cliente WHERE dni = $1', [dni]);
    return { message: 'Cliente eliminado correctamente' };
  }
}

module.exports = new ClienteModel();
