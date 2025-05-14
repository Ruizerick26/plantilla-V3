import sendmailtoMe from "../config/nodemailer.js"

const sendmail = async(req,res)=>{
    const {email,nombre,apellido,mensaje} = req.body
    await sendmailtoMe(email,nombre,apellido,mensaje)

    return res.status(200).json({msg:"correo enviado"})
}

export {sendmail}