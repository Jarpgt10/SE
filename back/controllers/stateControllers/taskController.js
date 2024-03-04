const databaseService = require('../../services/stateService')

const getStates = (req, res) => {
  databaseService.get_states((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}

const getTask = (req, res) => {
  databaseService.get_task((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}

const addOrUpdateTask = (req, res) => {
  const Task = req.body

  const estadoData = Task.estado && Task.estado.data && Task.estado.data[0]

  const NewTask = {
    ...Task,
    estado: estadoData,
  }

  databaseService.add_or_update_task(NewTask, (error, result) => {
    if (error) {
      console.error('Error al agregar Tarea:', error)
      res.status(500).json({ error: 'Error al agregar Tarea' })
      return
    }
    res.status(200).json({ message: 'Tarea agregada correctamente', result })
  })
}

const DeletedTask = (req, res) => {
  const Task = req.body

  databaseService.deleted_task(Task.id_tarea, (error, result) => {
    if (error) {
      console.error('Error al eliminar Tarea:', error)
      res.status(500).json({ error: 'Error al eliminar Tarea' })
      return
    }
    res.status(200).json({ message: 'Tarea Eliminada correctamente', result })
  })
}

module.exports = { getStates, getTask, addOrUpdateTask, DeletedTask }
