//** Importaciones necesarias
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const  EnviarCorreo = async() => {
   
    let html = '<!DOCTYPE html> <html lang="en"> <head>  ' 
    html=  html + '<div style="margin: 0; background-color: #091548; padding: 0"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #091548" width="100%" > <tbody> <tr> <td> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color: #000; width: 600px" width="600" > '
    html=  html + '<tbody> <tr> <td class="m_7096334481266321687column" style=" font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; padding-top: 5px; padding-bottom: 15px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; " width="100%" > <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" > <tr> <td style=" width: 100%; padding-right: 0; padding-left: 0; padding-top: 8px; " '
    html=  html + '> <div align="center" style="line-height: 10px"> <img alt="Main Image" src="https://piscotics.com/header3.png" style=" display: block; height: auto; border: 0; width: 232px; max-width: 100%; " title="Main Image" width="232" /> '
    html=  html + ' </div> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break: break-word" width="100%" > <tr> <td style="padding-bottom: 15px; padding-top: 10px"> <div style="font-family: sans-serif"> <div style=" font-size: 14px; color: #fff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; " > '
    html=  html + '<p style=" margin: 0; font-size: 14px; text-align: center; " > <span style="font-size: 30px" >Alerta Pisco </span> </p> </div> </div> </td> </tr> </table> <table border="0" cellpadding="5" cellspacing="0" role="presentation" style="word-break: break-word" width="100%" > <tr> <td> <div style="font-family: sans-serif"> <div style=" font-size: 14px; color: #fff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; " > <p style=" margin: 0; font-size: 14px; text-align: center; " > '
    html= html +  process.env.mensajenoti  +' </p> </div> </div> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation style=" width="100%" > <tr> <td style=" padding-bottom: 15px; padding-left: 10px; padding-right: 10px; padding-top: 10px; " > '
    html=  html + '<div align="center"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="60%" > <tr> <td style=" font-size: 1px; line-height: 1px; border-top: 1px solid #5a6ba8; " > <span> </span> </td> </tr> </table> </div> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break: break-word" width="100%" > <tr> <td style=" padding-bottom: 40px; padding-left: 25px; padding-right: 25px; padding-top: 10px; " > <div style="font-family: sans-serif"> <div style=" font-size: 14px; color: #7f96ef; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; " >'
    html=  html + '</div> </div> </td> </tr> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" > <tbody> <tr> <td> <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_7096334481266321687row-content m_7096334481266321687stack" role="presentation" style="color: #000; width: 600px" width="600" >'
    html=  html + '<tbody> <tr> <td class="m_7096334481266321687column" style=" font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; " width="100%" > <table border="0" cellpadding="5" cellspacing="0" role="presentation" width="100%" > <tr> <td> <div align="center" style="line-height: 10px"> <img alt="Your Logo" src="https://piscotics.com/plantilla/bannerpie.png" style=" display: block; height: auto; border: 0; width: 400px; max-width: 100%; " title="Your Logo" width="300" /> </div> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" > '
    html=  html + '<tr> <td style=" padding-bottom: 15px; padding-left: 10px; padding-right: 10px; padding-top: 15px; " > <div align="center"> <table border="0" cellpadding="0" role="presentation" width="60%" > <tr> <td style=" font-size: 1px; line-height: 1px; border-top: 1px solid #5a6ba8; " > '
    html=  html + '<span> </span> </td> </tr> </table> </div> </td> </tr> </table> <table border="0" cellpadding="15" cellspacing="0" role="presentation" style="word-break: break-word" width="100%" > <tr> <td> <div style="font-family: sans-serif"> <div style=" font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; color: #4a60bb; line-height: 1.2; " ></div> </div> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" > <tr> <td> <div align="center" style=" font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; text-align: center; " > <div></div> </div> </td> </tr> </table> '
    html=  html + '</td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <div id="m_7096334481266321687DAB4FAD8-2DD7-40BB-A1B8-4E2AA1F9FDF2"> <br /> <table style="border-top: 1px solid #d3d4de"> <tr> <td style="width: 55px; padding-top: 13px"> <a href="https://www.avast.com/sig-email?utm_medium=email&amp;utm_source=link&amp;utm_campaign=sig-email&amp;utm_content=emailclient" target="_blank" rel="noreferrer" >'
    html=  html + '<img src="https://s-install.avcdn.net/ipm/preview/icons/icon-envelope-tick-round-orange-animated-no-repeat-v1.gif" alt=" width=" height="29" style="width: 46px; height: 29px" /></a> </td> <td style=" width: 470px; padding-top: 12px; color: #41424e; font-size: 13px; font-family: Arial, Helvetica, sans-serif; line-height: 18px; " > Libre de virus.<a href="https://www.avast.com/sig-email?utm_medium=email&amp;utm_source=link&amp;utm_campaign=sig-email&amp;utm_content=emailclient" style="color: #4453ea" target="_blank" rel="noreferrer" >www.avast.com</a > </td> </tr> </table> <a href="#m_7096334481266321687_DAB4FAD8-2DD7-40BB-A1B8-4E2AA1F9FDF2" width="1" height="1" rel="noreferrer" > '
    html=  html + '</a> </div> </div> </div> <title>Document</title> </head> <body></body> </html>'
    //*Se crear el objeto para el envio del correo   
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.piscotics.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.emailinfo, // generated ethereal user
        pass:  process.env.passwordmail , // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
    }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"PISCO COMPANY TICS< "'  + process.env.emailinfo + '">"', // sender address
      to:  process.env.correosNoti, // list of receivers
      subject: "ALERTA PISCO", // Subject line
      text: "Hello world?", // plain text body
      html: html, // html body
    });
  
  }
  
module.exports = EnviarCorreo