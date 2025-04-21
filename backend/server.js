//tenemos un framework  para la creacion del servidos web
const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routers/clienteRouters');
const productRoutes = require('./routers/productRouters');

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/clientes', clienteRoutes);
    this.app.use('/productos', productRoutes);
  }

  start() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }
}

const server = new Server();
server.start();