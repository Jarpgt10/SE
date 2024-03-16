const express = require('express')
const router = express.Router()

const userController = require('../controllers/user/userController')
const cursosController = require('../controllers/cursosControllers/CursoController')
const carrerasController = require('../controllers/carrerasControllers/CarreraController')

router.get('/user', userController.getUser)
router.post('/existuser', userController.getExistUser)
router.post('/userById', userController.getUserById)

router.get('/cursos', cursosController.getCursos)

router.get('/carrera', carrerasController.getCarrera)

router.get('/roles', userController.getRoles)
// router.post('/saveImg', userController.saveImage)

module.exports = router
