const databaseConfig = require('../config/database')
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = require('../controllers/database/database')

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos')
}

exports.get_user = (callback) => {
  const userQuery = `SELECT a.* FROM usuario A 
                     INNER JOIN rol_usuario B ON A.id_usuario = B.id_rol_usuario
                     WHERE A.id_rol_usuario = 1 and A.id_usuario = 1;`

  const permissionsQuery = `SELECT c.id_menu, d.nombre_menu FROM usuario A
                            INNER JOIN permiso_menu C ON A.id_usuario = C.id_usuario
                            INNER JOIN menu D ON D.id_menu = C.id_menu
                            WHERE A.id_rol_usuario = 1 and A.id_usuario = 1;`

  connection.query(userQuery, (error, userResults) => {
    if (error) {
      console.error('Error al obtener la información del usuario:', error)
      callback(error, null)
      return
    }

    connection.query(permissionsQuery, (error, permissionsResults) => {
      if (error) {
        console.error('Error al obtener los permisos:', error)
        callback(error, null)
        return
      }

      const transformedResults = userResults.map((user) => {
        return {
          id_usuario: user.id_usuario,
          usuario: user.usuario,
          permisos: permissionsResults
            .filter((permission) => permission.id_menu) // Filtro para asegurarse de que haya permisos
            .map((permission) => ({
              id_menu: permission.id_menu,
              nombre_menu: permission.nombre_menu,
            })),
        }
      })

      callback(null, transformedResults)
    })
  })
}
