const mongoose = require('mongoose');
const { Schema } = mongoose;

const claveSchema = new Schema(
    {
        id: {type:mongoose.Types.ObjectId},
        clave: {type: String},
    },
    {
    versionKey: false,
    timestamp: true
    }
);

module.exports = mongoose.model('Clave', claveSchema);
