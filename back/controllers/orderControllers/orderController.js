const databaseService = require('../../services/orderService');

exports.getAllOrders = (req, res) => {
    databaseService.getOrders((error, orders) => {
      if (error) {
        console.error('Error al obtener ordenes:', error);
        res.status(500).json({ error: 'Error al obtener ordenes' });
        return;
      }
  
      res.json(orders);
    });
  };  