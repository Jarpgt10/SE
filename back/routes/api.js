const express = require('express')
const router = express.Router()
// const taksController = require('../controllers/stateControllers/taskController')
const userController = require('../controllers/user/userController')

// router.get('/states', taksController.getStates)
// router.get('/taks', taksController.getTask)
// router.post('/addOrUpdateTask', taksController.addOrUpdateTask)
// router.post('/DeletedTask', taksController.DeletedTask)

router.get('/user', userController.getUser)

module.exports = router
