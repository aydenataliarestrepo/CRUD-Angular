//Importo el modulo express
const express = require('express')

//Importo cors 
const cors = require('cors')

const { response } = require('express')


//Construyo la app utilizando express
const app = express()

//Identifico el puerto que me identifica la app 
const port = 4200

//#region 
//Manejo de las URLs
app.use(
    express.urlencoded({
        extended: true
    })
)

//Manejo de Json 
app.use(express.json({
    type: "*/*"
}))

//Utilizacion del cors 
app.use(cors());

//#endregion

//Obtener datos 
app.get('/transactions', (require, response) => {
    response.send('Funcionando!')
})

//Recibir datos
app.post('/transactions', (require, response) => {
    //console.log("Esta ingresando información");
    //response.send('Recibiendo!')
})

//Utilizo el listen 
app.listen(port, () => {
    console.log(`En ejecución en http://localhost:${port}/transactions`)
})