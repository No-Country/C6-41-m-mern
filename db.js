const mongoose = require('mongoose');

const URI = "mongodb+srv://nocountry-proyect:yw2f30Jcmi8Csbyt@cluster0.dqrcquu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI)
    .then(db => console.log("Conectado a la DB"))
    .catch(error => console.error(error));

module.exports = mongoose;