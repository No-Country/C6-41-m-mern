const express = require('express');
const morgan = require('morgan');
const path = require('path'); // para concatenar direcciones con slash
const { mongoose } = require('./db')
var cors = require('cors');


const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

//Configuraciones
app.set('port', process.env.PORT || 5000)

//Midlewares (funciones que se ejecutan antes de llegar a las rutas)

app.use(morgan('dev')); //Permite ver por consola las peticiones al servidor
app.use(express.json()); //Permite la comunicacion cliente-servidor en formato JSON

//Rutas
const rutaBase = '/api' //Para definir cual sera la ruta base de la API
app.use(rutaBase, require('./src/routes/index'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, '../front/public'))); //Dice la ruta donde estan los archivos estaticos

//Arranque del servidor
const puerto = app.get('port');
app.listen(puerto, () => {
    console.log(`El servidor esta corriendo en el puerto ${puerto}`);
});