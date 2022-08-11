const express = require('express');
const router = express.Router(); //Devuelve un objeto en el cual se pueden ingresar rutas

router.get('/', (req, res) => {
    res.json({
        status: 'La API esta funcionando'
    })
})


module.exports = router;