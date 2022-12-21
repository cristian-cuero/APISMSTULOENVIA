const db = require("odbc")

//!Conexion ODBC Con La Baase De Datos , Tambien Realiza Las Consultas
const consulta = async (sql = "", parametros = []) => {

  
       const coneccion =   await db.connect(`DSN=CnxPiscoSMS`);   
       let data = await coneccion.query(sql, parametros)
       coneccion.close();
        data = data.splice(data.length - 4)
       return data;
  
}




module.exports =  consulta;

