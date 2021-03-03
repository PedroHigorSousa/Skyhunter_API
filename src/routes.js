const { Router } = require('express')

const routes = new Router()

// Controllers
const ComputerController = require('./controller/ComputerController');

// CRUD:Computer =>
routes.get('/computers', ComputerController.index);
routes.post('/computers', ComputerController.storeComputer);
routes.delete('/computers/:id', ComputerController.deleteComputer);

module.exports = routes;