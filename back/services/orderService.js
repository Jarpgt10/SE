const databaseConfig = require('../config/database');
const mysql = require('mysql');

const connection = require('../controllers/database/database');

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos');
};

exports.getOrders = (callback) => {
  const query = 'SELECT A.*,b.estado,(A.PRECIO*A.CANTIDAD) AS total  FROM ordenes as A INNER JOIN cat_estado_orden B ON  A.id_estado_orden =B.id;';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las ordenes:', error);
      callback(error, null);
      return;
    }

    const order = results;
    callback(null, order);
  });
};       