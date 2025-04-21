const clienteModel = require('../models/clienteModel');

class ClienteService {
  async getClientes() {
    return await clienteModel.getAllClientes();
  }

  async getClienteByDni(dni) {
    return await clienteModel.getClienteByDni(dni);
  }

  async addCliente(data) {
    return await clienteModel.createCliente(data);
  }

  async modifyCliente(dni, data) {
    return await clienteModel.updateCliente(dni, data);
  }

  async removeCliente(dni) {
    return await clienteModel.deleteCliente(dni);
  }
}

module.exports = new ClienteService();
