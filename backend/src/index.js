
import app from './server.js'

app.listen(app.get('port'),()=>{
    console.log('--- servidor corriendo --- ', `http://localhost:${app.get('port')}`)
})
