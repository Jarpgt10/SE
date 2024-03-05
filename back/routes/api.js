const express = require('express')
const router = express.Router()
// const taksController = require('../controllers/stateControllers/taskController')
const userController = require('../controllers/user/userController')
const cursosController = require('../controllers/cursosControllers/CursoController')

// router.get('/states', taksController.getStates)
// router.get('/taks', taksController.getTask)
// router.post('/addOrUpdateTask', taksController.addOrUpdateTask)
// router.post('/DeletedTask', taksController.DeletedTask)

router.get('/user', userController.getUser)
router.post('/existuser', userController.getExistUser)
router.get('/cursos', cursosController.getCursos)

module.exports = router
