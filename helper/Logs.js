
//** IMPORTACIONES NECESARIA
const fs = require('fs-extra')
const moment = require("moment");


//* Funcion Encargada De Crear Un Logs De Errores En El Sistema
const Logs =  (texto = `******** Inicio De Servicio El Dia: ${moment().format("YYYY-MM-DD HH:mm")} De Manera De Correcta ******** \n `) => {
const nombre = "LogsDeErrores"
const direccion = __dirname.replace('\helper', '') + 'Logs\\' + nombre +'.txt'

if(!fs.existsSync(direccion)){
    fs.writeFileSync(direccion,  `******** Inicio De Servicio El Dia: ${moment().format("YYYY-MM-DD HH:mm")} De Manera De Correcta ******** \n `)
}else{
    fs.appendFileSync(direccion,  ` ******** Se Presento El Siguiente Error  ${texto} En La Fecha: ${moment().format("YYYY-MM-DD HH:mm")}  ******** \n `)
}


}


module.exports = {
    Logs
}


