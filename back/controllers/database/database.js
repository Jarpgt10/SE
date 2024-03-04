// const mysql = require('mysql');
const mysql = require('mysql2')
const databaseConfig = require('../../config/database')

// Crear una instancia de conexión a la base de datos
const connection = mysql.createConnection(databaseConfig)

// Establecer la conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err)
    return
  }
  console.log('Conexión exitosa a la base de datos')
})

module.exports = connection
