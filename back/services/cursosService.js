const databaseConfig = require('../config/database')
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = require('../controllers/database/database')

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos')
}

exports.get_cursos = (callback) => {
  const query = `SELECT 
                    A.id_curso,
                    B.id_carrera_universitaria,
                    A.codigo_curso,
                    A.estado as estado_curso,
                    B.estado as estado_carrera_universitaria,
                    A.nombre as nombre_curso,
                    b.nombre_carrera	 
                    FROM curso A
                    INNER JOIN carrera_universitaria  B ON A.id_carrera_universitaria = B.id_carrera_universitaria  and B.estado = 1
                    WHERE A.estado = 1;`

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
