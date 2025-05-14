import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()

//modelo json para almacenar en la base de datos
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP,
    }
});

const sendmailtoMe = (email,nombre,apellido,msg)=>{
    let mailOptions = {
        from: email,
        to: process.env.USER_MAILTRAP,
        subject: "contacto portafolio web",
        html: `
        <html>
            <p>Contactado por ${nombre} ${apellido}</p>
            <p>CORREO: ${email}</p>
            <body>
                <p>
                    ${msg}
                </p>
            </body>
        </html>`
    }
        transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log('correo enviado' + info.response);
        }


    })
}

export default sendmailtoMe