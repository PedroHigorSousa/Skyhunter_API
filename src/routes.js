const express = require('express');


const routes = express.Router();


const ComputerController = require('./controller/ComputerController');


routes.get('/computers', ComputerController.index);
routes.post('/computers', ComputerController.storeComputer);


module.exports = routes;