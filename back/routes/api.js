const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers/userController'); // rutas
const orderController = require('../controllers/orderControllers/orderController'); //rutas
const productController = require('../controllers/inventaryControllers/inventaryController'); //rutas




// Ruta para logueo
router.post('/login', userController.Login);

// Ruta para obtener todos los usuarios
router.get('/users', userController.getAllUsers);
router.get('/orders', orderController.getAllOrders);







router.get('/typeProduct', productController.getAllTypeProduct);
router.get('/getInventary', productController.getAllInvetary);
router.post('/addProducts', productController.addProducts);
router.post('/CreateInvetary', productController.CreateInventary);
router.post('/detailInventary',productController.getInventaryDetail);
router.post('/detailInventaryById',productController.getInventaryDetailById);
router.get('/getProducts',productController.getProducts);
router.post('/addProductoToInventary',productController.addProductToInventary);
router.post('/UpdateProductToInventary',productController.updateProductToInventary);







// Ruta para crear un nuevo usuario
// router.post('/users', userController.createUser);

// Otros manejadores de ruta para actualizar y eliminar usuarios
// ...

module.exports = router;
