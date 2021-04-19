const express = require('express')
const app = express();

// CONFIGURACION.
// const port = process.env.PORT || 3005
app.set('port', process.env.PORT || 3005);



// MIDDLEWARES (FUNCIONES QUE SE EJECUTAN ANTES DE LAS RUTAS).
app.use(express.json()); // SERVIDOR CAPAZ DE ENTENDER FORMATOS JSON.



// RUTAS.
// app.get('/' , (req , res)=>{
//    res.send('hello from simple server :)')
// })
app.use(require('./routes/employees'));



// INICIAR EL SERVIDOR.
// app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
app.listen(app.get('port') , ()=> console.log('> Server is up and running on port : ' + app.get('port')))