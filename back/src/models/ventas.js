const mongoose = require('mongoose');
const { Schema } = mongoose;

const ventasSchema = new Schema(
    {
        id: {type:mongoose.Types.ObjectId},
        terminal: {type: Number},
        sucursal: {type: Number},
        nroPedido: {type: Number},
        poductos: { type: Array },
    },
    {
    versionKey: false,
    timestamp: true
    }
);

module.exports = mongoose.model('Venta', ventasSchema);
