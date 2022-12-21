const moment = require("moment");
const consulta = require("../DB/DBConection");
const EnvioSMS = require("./EnvioSMS");

//!!Clase Encargada De Consultar Los Mensjes De Texto
const ConsultarSMS = async () => {
  let sql;
  let parametros = [];
  //*es para enviar mensajes atrasadas o solo los actuales
  if (parseInt(process.env.atraso) === 0) {
    sql =
      "select first(1000)  * from  tblmensajes m where m.fecha >= ?  and m.procesado = 0 ";
    parametros.push(moment().format("YYYY-MM-DD"));
  } else {
    sql = "select first(1000)  * from  tblmensajes m where  m.procesado = 0 ";
    parametros = [];
  }
  const body = {};

  //*realiza la consulta de los mensajes 

  const res = await consulta(sql, parametros);
  const id = [];

  //*Se Construye Los JSON Para El Envio De Los Mensajes 
  const mensaje = res.map(function (ms) {
    id.push(ms.IDMENSAJE);
    return {
      destinatario: ms.CELULAR.trim(),
      texto: ms.MENSAJE.trim(),
    };
  });
  const sms = {
    mensaje,
  };
  body.codapi = process.env.apikey;
  body.mensajes = sms;
  
  //*envio Los Mensajes  Siempre Y Cuando Exista Data
  if (id.length > 0){
    await EnvioSMS(body, id);
  }

};

module.exports = ConsultarSMS;
