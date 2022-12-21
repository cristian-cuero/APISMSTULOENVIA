//modelo del servidor
//libreria Externa
const express = require("express");
//uso de cors
const cors = require("cors");
const consulta = require("../DB/DBConection");
const ConsultarSMS = require("../helper/ConsultarSMS");
const { Logs } = require("../helper/Logs");

class Server {
  //constructor
  constructor() {
    this.app = express();
    this.port = process.env.puerto;

    //paths de rutas
    this.paths = {
      usuarios: "/api/users",
    };

    this.middleware();
    //rutas de la aplicacion
    // this.routes();
    this.conectarDD();

    Logs();
  }

  //para que escuche la aplicacion
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Backend corriendo en http://localhost:${this.port}`);
    });
  }

  //crea la configuracion de los parametros necesarias para loguearse
  async conectarDD() {
    try {
   
      console.log("INICIO");
      const res = await consulta("select * from tblparametrosmodem");
      process.env.apikey = res[0].USUARIO;
      process.env.url = res[0].URLENVIO;
      process.env.atraso = res[0].ENVIARATRASADOS;
      process.env.passwordmail = res[0].PASSWORDMAIL;
      process.env.correosNoti = res[0].CORREOS;
      process.env.mensajenoti = res[0].MENSAJESTOCK;
      await ConsultarSMS();
     
      while (true) {
       
        await Promise.all([  this.timeout(10000)]);
       await this.conectarDD()
      }
    } catch (error) {
      Logs(JSON.stringify(error));
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  //middlewares de mi app
  middleware() {
    // uso de cors
    this.app.use(cors());
    //lectura y pareson de json
    this.app.use(express.json());
    //use rutas estaticas;
    //directorio publico siempre llama el index para el get / solo
    this.app.use(express.static("public"));
    //acepta archiva desde peticiones rest es una configuracion
    // this.app.use(
    //   fileUpload({
    //     useTempFiles: true,
    //     tempFileDir: "/tmp/",
    //     createParentPath: true, //mucho cuidado que esto crea carpeta donde sea
    //   })
    // );
  }

  //importar Rutas
}
//exportar
module.exports = Server;
