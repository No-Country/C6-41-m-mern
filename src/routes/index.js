const express = require('express');
const router = express.Router(); //Devuelve un objeto en el cual se pueden ingresar rutas
const Venta = require('../models/ventas')
const Productos = require('../models/productos')
const Clave = require('../models/clave')

router.get('/ventas', async function(req, res) {
    const ventas = await Venta.find();
    res.json(ventas);
});

router.post('/ventas', async function(req, res) {
    const { id, terminal, sucursal, nroPedido, poducto } = req.body;
    const venta = new Venta({ id, terminal, sucursal, nroPedido, poducto });
    await venta.save();
    res.json('Venta grabada');
});

router.get('/productos', async function(req, res) {
    const productos = await Productos.find();
    res.json(productos);
});

router.post('/productos', async function(req, res) {
    const { id, categoria, nombre, precio } = req.body;
    const producto = new Productos({ id, categoria, nombre, precio });
    await producto.save();
    res.json('Producto guardado correctamente');
});

router.delete('/productos/:id', async function(req,res) {
    const { id } = req.params;
    await Productos.findByIdAndDelete(id);
    res.json('Producto eliminado');
})

router.put('/productos/', async function(req,res) {
    await Productos.findOneAndUpdate({
        _id: req.body._id },{
        id: req.body.id,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio
    })
    res.json('Producto modificado')
})

router.get('/claveAdmin', async function(req, res) {
    const clave = await Clave.find();
    res.json(clave);
});

module.exports = router;