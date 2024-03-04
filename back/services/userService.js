const databaseConfig = require('../config/database')
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = require('../controllers/database/database')

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos')
}

exports.get_user = (callback) => {
  const query = `SELECT  a.* FROM usuario A 
                    INNER JOIN rol_usuario B ON A.id_usuario = B.id_rol_usuario
                    WHERE A.id_rol_usuario = 1 and A.id_usuario =1;`

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
