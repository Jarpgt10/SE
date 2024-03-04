const databaseConfig = require('../config/database');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const connection = require('../controllers/database/database');

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos');
};

exports.getUsersFromDatabase = (callback) => {
  const query = 'SELECT * FROM usuario;';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      callback(error, null);
      return;
    }

    const users = results;
    callback(null, users);
  });
};



exports.get_login = (data, callback) => {
  const { user, password } = data;

  // Primero, buscar el usuario por nombre de usuario
  const query = 'SELECT * FROM usuario WHERE usuario = ?';

  connection.query(query, [user], (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      callback(error, null);
      return;
    }

    // Verificar si se encontró un usuario con ese nombre de usuario
    if (results.length === 0) {
      callback('Usuario no encontrado', null);
      return;
    }

    // Comparar la contraseña almacenada en la base de datos con la proporcionada de manera segura
    const userFromDB = results[0];

  
    bcrypt.compare(password, userFromDB.contrasena, (err, isMatch) => {
      if (err) {
        console.error('Error al comparar contraseñas:', err);
        callback(err, null);
        return;
      }

      if (isMatch) {
        callback(null, userFromDB);
      } else {
        callback('Contraseña incorrecta', null);
      }
    });
  });
};


// Otros servicios relacionados con la base de datos
// ...
