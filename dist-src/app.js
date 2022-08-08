import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes.mjs';
import './database';

class App {
  constructor() {
    this.server = express(); //INICIANDO O EXPRESS

    this.server.use(cors());
    this.server.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });
    this.routes(); //DEFININDO ROTAS
  }

  routes() {
    this.server.use(bodyParser.json());
    this.server.use(routes);
  }

}

export default new App().server; // TODA APLICAÇÃO NODE TERMINA EXPORTANDO O OBJETO PARA O SERVIDOR