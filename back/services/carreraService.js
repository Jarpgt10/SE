const databaseConfig = require('../config/database')
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = require('../controllers/database/database')

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos')
}

exports.get_carreras = (callback) => {
  const query = 'SELECT * FROM carrera_universitaria where estado = 1;'

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
