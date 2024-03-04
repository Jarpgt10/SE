const databaseService = require('../../services/inventaryService');


// trae los tipos de productos
exports.getAllTypeProduct = (req, res) => {
    databaseService.getTypeProduct((error, orders) => {
      if (error) {
        console.error('Error al obtener ordenes:', error);  
        res.status(500).json({ error: 'Error al obtener ordenes' });
        return;
      }
  
      res.json(orders);
    });
};


exports.getAllInvetary = (req, res) => {
  databaseService.get_all_inventary((error, orders) => {
    if (error) {
      console.error('Error al obtener ordenes:', error);  
      res.status(500).json({ error: 'Error al obtener ordenes' });
      return;
    }

    res.json(orders);
  });
};

exports.addProducts = (req, res) => {
  // const productsToAdd = Object.values(req.body); // Los datos enviados desde el cliente se encuentran en req.body
  const product =req.body;
  const productsToAdd = [product];
  
  // Llama a la función para agregar productos
  databaseService.add_Products(productsToAdd, (error, result) => {
    if (error) {
      console.error('Error al agregar productos:', error);
      res.status(500).json({ error: 'Error al agregar productos' });
      return;
    }

    res.json({ message: 'Productos agregados con éxito', result });
  });
};

exports.CreateInventary = (req, res) => {
  // const productsToAdd = Object.values(req.body); // Los datos enviados desde el cliente se encuentran en req.body
  const inventary =req.body;
  const InventaryAdd = [inventary];
  
  // Llama a la función para agregar InventaryAdd
  databaseService.create_inventary(InventaryAdd, (error, result) => {
    if (error) {
      console.error('Error al agregar inventario:', error);
      res.status(500).json({ error: 'Error al agregar inventario' });
      return;
    }

    res.json({ message: 'Inventario agregado con exito', result });
  });
};

exports.getInventaryDetail = (req, res) => {

  const id_inventario = req.body.id_inventario;



  databaseService.get_inventary_detail(id_inventario, (error, results) => {
    if (error) {
      // console.error('Error al obtener el inventario', error);
      res.status(500).json({ error: 'Error al agregar inventario' });
      return;
    }else{
      // console.log(results);
      res.json(results);
    }

    
  });
};

exports.getInventaryDetailById = (req, res) => {

  const id_inventario = req.body.id_detalle_inventario;
  
  databaseService.get_inventary_detail_by_id(id_inventario, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al agregar inventario' });
      return;
    }else{
      
      res.json(results);
    }

  });
};

exports.getProducts = (req, res) => {
  
  databaseService.get_products((error, product) => {
    if (error) {
      console.error('Error al obtener los productos:', error);  
      res.status(500).json({ error: 'Error al obtener los productos' });
      return;
    }

    res.json(product);
  });
};

exports.addProductToInventary = (req, res) => {
  const arrDataProducto = [req.body];
  databaseService.add_product_to_inventary(arrDataProducto, (error, results) => {
    if (error) {
      console.log('Error en mi controlador');
      
    }else{
  
      res.json(results);
    }

  });
};

exports.updateProductToInventary = (req, res) => {
  const arrDataProducto = [req.body];
  
  databaseService.update_product_to_inventary(arrDataProducto, (error, results) => {
    if (error) {
      console.error('error al Actualizar', error);
    }else{
  
      res.json(results);
    }

  });
};
