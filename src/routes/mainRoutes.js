const express = require("express");
const path = require("path");
const app = express();

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/producto', mainController.producto);
router.get('/carrito', mainController.carrito);
router.get('/crearProducto', mainController.crearProducto);
router.get('/editarProducto', mainController.editarProducto);


module.exports = router;