const axios = require("axios");
const consulta = require("../DB/DBConection");
const moment = require("moment");
const EnviarCorreo = require("./EnviarCorreo");
const { Logs } = require("./Logs");

//!Funcion Encargada De Realizar El Envio De Los Mensajes De Al Api De Tuloenvia Y Cmabiarlos A Procesados
const EnvioSMS = async (body = {}, id = []) => {
  json = JSON.stringify(body);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const resp = await axios.post(process.env.url, json, config);
    if (resp.status === 200) {
      const { data } = resp;
      const { codigo, mensaje } = data;
      if (parseInt(codigo) === 200) {
        for (const codigo of id) {
          await consulta(
            `update tblmensajes m set m.procesado = 1 , m.horaenvio = '${moment().format(
              "YYYY-MM-DD HH:MM"
            )}'  where m.idmensaje = ?`,
            [codigo]
          );
        }
      } else if (parseInt(codigo === -2)) {
        await EnviarCorreo();
      } else {
        const texto = codigo +  mensaje
        Logs (texto);
      }
    }
    else{
      Logs(JSON.stringify(resp))
    }

  } catch (error) {
    Logs(JSON.stringify(error));
  }
};

module.exports = EnvioSMS;
