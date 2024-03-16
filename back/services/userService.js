const databaseConfig = require('../config/database')
const mysql = require('mysql')

const connection = require('../controllers/database/database')

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos')
}

exports.get_exist_user = (user, callback) => {
  const selectQuery =
    'SELECT * FROM usuario WHERE carne = ? AND contrasena = ? '

  connection.query(
    selectQuery,
    [user.carne, user.contrasena],
    (error, results, fields) => {
      results = results.map((data) => ({
        ...data,
        estado: data.estado.readUInt8(0),
      }))

      if (error) {
        console.error('Error executing query:', error)

        callback(error, null)
      } else {
        callback(null, results)
      }
    },
  )
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

exports.get_roles = (callback) => {
  const query =
    'SELECT * FROM rol_usuario where estado = 1 and id_rol_usuario != 1;'

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

exports.get_user_by_id = (user, callback) => {
  const selectUserQuery = `SELECT a.usuario, 
                            A.primer_nombre, 
                            A.segundo_nombre, 
                            A.primer_apellido, 
                            A.segundo_apellido,
                            A.correo, 
                            A.carne, 
                            A.url_image,
                            b.nombre FROM usuario A
                            INNER JOIN rol_usuario B on a.id_rol_usuario = b.id_rol_usuario
                            WHERE a.id_usuario = ? AND a.estado = 1`
  const selectPermissionsQuery = `SELECT c.id_menu, d.nombre_menu FROM usuario A
                                  INNER JOIN permiso_menu C ON A.id_usuario = C.id_usuario
                                  INNER JOIN menu D ON D.id_menu = C.id_menu
                                  WHERE A.id_usuario = ?`

  connection.query(selectUserQuery, [user.id_usuario], (error, userResults) => {
    if (error) {
      console.error('Error al obtener la información del usuario:', error)
      callback(error, null)
      return
    }

    connection.query(
      selectPermissionsQuery,
      [user.id_usuario],
      (error, permissionsResults) => {
        if (error) {
          console.error('Error al obtener los permisos:', error)
          callback(error, null)
          return
        }

        const transformedResults = userResults.map((user) => {
          return {
            usuario: user.usuario,
            primer_nombre: user.primer_nombre,
            segundo_nombre: user.segundo_nombre,
            primer_apellido: user.primer_apellido,
            segundo_apellido: user.segundo_apellido,
            correo: user.correo,
            estado: user.estado,
            carne: user.carne,
            url_image: user.url_image,
            nombre_rol: user.nombre,
            // estado: user.estado.readUInt8(0), // Supongo que estado es un buffer
            permisos: permissionsResults.map((permission) => ({
              id_menu: permission.id_menu,
              nombre_menu: permission.nombre_menu,
            })),
          }
        })

        callback(null, transformedResults)
      },
    )
  })
}
