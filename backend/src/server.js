import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import router_send from './routes/route_mail.js'

dotenv.config()
const app = express()

//Configuracion de intercambio de recursos de origen cruzado 'cors'

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

//puerto a usar
app.set('port',process.env.port || 300) 


//configuracion de uso de json
app.use(express.json())

//rutas
app.use("/api",router_send)
//CONTROL DE RUTAS

app.use((req,res)=> res.status(404).send("endpoint no encontrado"))

export default app