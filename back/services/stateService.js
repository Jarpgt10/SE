const databaseConfig = require('../config/database')
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = require('../controllers/database/database')

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos')
}

exports.get_states = (callback) => {
  const query = 'SELECT *FROM estado_tarea WHERE estado = 1;'

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las ordenes:', error)
      callback(error, null)
      return
    }

    const typeProduct = results
    callback(null, typeProduct)
  })
}

exports.get_task = (callback) => {
  const query = 'SELECT *FROM tarea WHERE estado =1;'

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las ordenes:', error)
      callback(error, null)
      return
    }

    const typeProduct = results
    callback(null, typeProduct)
  })
}

exports.add_or_update_task = (newTask, callback) => {
  const {
    id_tarea,
    id_estado_tarea,
    nombre_tarea,
    descripcion_tarea,
    fecha_entrega,
  } = newTask

  const values = [
    [id_estado_tarea, nombre_tarea, descripcion_tarea, fecha_entrega],
  ]

  if (id_tarea && id_tarea !== 0) {
    const updateQuery =
      'UPDATE tarea SET id_estado_tarea=?, nombre_tarea=?, descripcion_tarea=?, fecha_entrega=? WHERE id_tarea=?'
    const updateValues = [
      id_estado_tarea,
      nombre_tarea,
      descripcion_tarea,
      fecha_entrega,
      id_tarea,
    ]

    connection.query(updateQuery, updateValues, (updateError, updateResult) => {
      if (updateError) {
        console.error(
          'Error al actualizar task en la base de datos:',
          updateError,
        )
        callback(updateError, null)
      } else {
        console.log('Se ha actualizado correctamente:', updateResult)
        callback(null, updateResult)
      }
    })
  } else {
    const insertQuery =
      'INSERT INTO tarea(id_estado_tarea, nombre_tarea, descripcion_tarea, fecha_entrega) VALUES ?'

    connection.query(insertQuery, [values], (insertError, insertResult) => {
      if (insertError) {
        console.error('Error al agregar task a la base de datos:', insertError)
        callback(insertError, null)
      } else {
        console.log('Se ha agregado correctamente:', insertResult)
        callback(null, insertResult)
      }
    })
  }
}

exports.deleted_task = (taskId, callback) => {
  const updateQuery = 'UPDATE tarea SET estado = 0 WHERE id_tarea = ?'

  connection.query(updateQuery, [taskId], (updateError, updateResult) => {
    if (updateError) {
      console.error(
        'Error al actualizar estado de tarea en la base de datos:',
        updateError,
      )
      callback(updateError, null)
    } else {
      console.log('Se ha actualizado correctamente:', updateResult)
      callback(null, updateResult)
    }
  })
}
