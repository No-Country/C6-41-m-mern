const express = require('express');
const morgan = require('morgan');
const path = require('path'); // para concatenar direcciones con slash
const { mongoose } = require('./db')
var cors = require('cors');


const app = express();

//Configuraciones
app.set('port', process.env.PORT || 5000)

//Midlewares (funciones que se ejecutan antes de llegar a las rutas)

app.use(morgan('dev')); //Permite ver por consola las peticiones al servidor
app.use(express.json()); //Permite la comunicacion cliente-servidor en formato JSON

//Rutas
const rutaBase = '/' //Para definir cual sera la ruta base de la API
app.use(rutaBase, require('./src/routes/index'));

//Arranque del servidor
const puerto = app.get('port');
app.listen(puerto, () => {
    console.log(`El servidor esta corriendo en el puerto ${puerto}`);
});