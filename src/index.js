const express = require('express')
const app = express()
const port = 3000

app.get('/saludo', (req, res)=>{
    res.send('Hola Mundo!')

})

app.listen(port, ()=> {
    console.log('La aplicació se está ejecutando por el puerto' + `${port}`) 

})