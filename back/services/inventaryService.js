const databaseConfig = require('../config/database');
const mysql = require('mysql');

const connection = require('../controllers/database/database');

exports.connectToDatabase = () => {
  console.log('Conexión establecida con la base de datos');
};

exports.getTypeProduct = (callback) => {
  const query = 'SELECT *FROM tipo_cantidad_producto;';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las ordenes:', error);
      callback(error, null);
      return;
    }

    const typeProduct = results;
    callback(null, typeProduct);
  });
};    

exports.add_Products = (productsToAdd, callback) => {

  const query = 'INSERT INTO producto (id_tipo_cantidad_producto, nombre_producto,estado) VALUES ?';
  const values = productsToAdd.map((product) => [product.tipo_producto, product.nombre_producto, 1]);

  connection.query(query, [values], (error, result) => {
    if (error) {
      console.error('Error al agregar productos a la base de datos:', error);
      callback(error, null);
      return;
    }else{
      // console.log('Se ha agregado correctamente', error);
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.create_inventary = (InventaryAdd, callback) => {

  const query = 'INSERT INTO inventario (fecha_inicio, fecha_final) VALUES ?';
  const values = InventaryAdd.map((inventary) => [inventary.fecha_inicio, inventary.fecha_final]);

  connection.query(query, [values], (error, result) => {
    if (error) {
      console.error('Error al agregar inventario base de datos:', error);
      callback(error, null);
      return;
    }else{
      console.log('Se ha agregado correctamente', error);
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.get_all_inventary = (callback) => {
  const query = 'SELECT *FROM inventario WHERE estado = 1;';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las ordenes:', error);
      callback(error, null);
      return;
    }

    const invetary = results;
    callback(null, invetary);
  });
};   

exports.get_inventary_detail = (id ,callback)=>{
  const strQuery = `SELECT A.*,B.nombre_producto,C.tipo_cantidad_Producto,(A.precio * A.cantidad) 'valor_mercaderia' 
                        FROM inventario_detalle as A
                        INNER JOIN producto B ON A.id_producto = B.id_producto
                        INNER JOIN tipo_cantidad_producto C ON B.id_tipo_cantidad_producto = C.id_tipo_cantidad_producto
                        WHERE A.id_inventario =  ?`;
  
  connection.query(strQuery, [id], (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      callback(error, null);
    } else {
  
      callback(error, results);
      
    }

  });


}

exports.get_inventary_detail_by_id = (id ,callback)=>{
  const strQuery = `SELECT a.*,b.nombre_producto,c.tipo_cantidad_Producto,(a.precio * a.cantidad) 'valor_mercaderia' 
                    FROM inventario_detalle A
                    INNER JOIN producto B ON A.id_producto = B.id_producto
                    INNER JOIN tipo_cantidad_producto C ON b.id_tipo_cantidad_producto = C.id_tipo_cantidad_producto
                    WHERE A.id_detalle_inventario =  ?`;
  
  connection.query(strQuery, [id], (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      callback(error, null);
    } else {
      callback(error, results);
      
    }

  });

}

exports.get_products = (callback) => {
  const query = 'SELECT * FROM DondePanchito.producto where estado = 1;';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las ordenes:', error);
      callback(error, null);
      return;
    }

    const products = results;
    
    callback(null, products);
  });
};   


exports.add_product_to_inventary = (arrDataProducto, callback) => {

  const query = 'INSERT INTO inventario_detalle (id_inventario, id_producto, cantidad, precio) VALUES ?';
  const values = arrDataProducto.map((item) => [item.id_inventario, item.id_producto,item.cantidad,item.precio ]);

  connection.query(query, [values], (error, result) => {
    if (error) {
      console.error('Error al agregar productos a la base de datos:', error);
      return;
    }else{
      callback(error, null);
      return result;
    }


  });
};

exports.update_product_to_inventary = (arrDataProduct, callback) => {
  // Construir la sentencia SQL de actualización
  const query = 'UPDATE inventario_detalle SET cantidad = ?, precio = ? WHERE id_inventario = ? AND id_producto = ?';
  
  // Recorrer el arreglo de datos y ejecutar la actualización para cada elemento
  arrDataProduct.forEach((item) => {
    const values = [item.cantidad, item.precio, item.id_inventario, item.id_producto];
    
    connection.query(query, values, (error, result) => {
      if (error) {
        // console.error('Error al actualizar producto en la base de datos:', error);
        return callback(error, null);
      } else {
        // console.log('Producto actualizado en la base de datos:', result);
        callback(error, null);
        return result;
      }
    });
  });
};