const express =require('express');
const routes =express.Router();
const ListsController = require('./controllers/ListsController');

routes.get("/listas",ListsController.index);
routes.post('/listas/',ListsController.store);
routes.get('/listas/:id',ListsController.show); 
routes.put("/listas/:id",ListsController.update);
routes.delete('/listas/:id',ListsController.destroy);

module.exports=routes;
