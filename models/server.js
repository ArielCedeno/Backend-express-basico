const express = require('express');
const cors = require('cors');

class Server {
  constructor() {   
    this.app = express();

    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    this.routesPath = require('../routes/user');

    //Middlewares
    this.middlewares();

    //Rutas de la app
    this.routes();
  }

  routes() {
    this.app.use(this.usersPath, this.routesPath)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }

  middlewares() {
    //Toma el index de una carpeta con nombre public
    this.app.use(express.static("public"));

    //CORS permite que las páginas web accedan a recursos de otros dominios de forma segura.
    this.app.use(cors());

    //La informacion que venga de un metodo POST o DELETE viene en JSON
    this.app.use(express.json());
  }
}

module.exports = Server;
