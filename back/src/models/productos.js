const mongoose = require('mongoose');
const { Schema } = mongoose;

const productosSchema = new Schema(
    {
        id: {
            type: Number, 
            required: true, 
            unique: true
        },
        categoria: {
            type: String,
            required: true
        },
        nombre: {
            type: String, 
            required: true
        },
        descripcion: {
            type: String
        },
        precio: {
            type: Number,
            required: true
        },
        ruta: {
            type: String
        }
    },
    {
    versionKey: false,
    timestamp: true
    }
);

module.exports = mongoose.model('Productos', productosSchema);
