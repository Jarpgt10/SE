const databaseService = require('../../services/databaseService');

exports.getAllUsers = (req, res) => {
  databaseService.getUsersFromDatabase((error, users) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }

    res.json(users);
  });
};





exports.Login = (req, res) => {

  const data = req.body;
  databaseService.get_login(data ,(error,results)=>{
    if (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
     }else{
        res.json(results);
     }
  })
  // databaseService.get_login((error, req) => {


  //   // if (error) {
  //   //   console.error('Error al obtener los usuarios:', error);
  //   //   res.status(500).json({ error: 'Error al obtener los usuarios' });
  //   //   return;
  //   // }

  //   // res.json(users);
  // });
};


