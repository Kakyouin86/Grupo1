const express = require("express");
const path = require("path");
const app = express();

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/producto/:id?', mainController.producto);

router.get('/productos', mainController.productos);

router.get('/carrito', mainController.carrito);

router.get('/crearProducto', mainController.renderCrearProducto);
router.post('/crearProducto', mainController.guardarProducto);

router.get('/editarProducto/:id', mainController.renderEditarProducto);
router.put('/editarProducto/:id', mainController.editarProducto);

router.delete('/borrarProducto/:id', mainController.borrarProducto);

module.exports = router;