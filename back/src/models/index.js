const mongoose = require('mongoose');
const { Schema } = mongoose;

const estaturaSchema = new Schema(
    {
        id: {type:mongoose.Types.ObjectId},
        nombre: { type: String },
        altura: { type: Number }
    },
    {
    versionkey: false,
    timestamp: true
    }
);

module.exports = mongoose.model('Estatura', estaturaSchema);
