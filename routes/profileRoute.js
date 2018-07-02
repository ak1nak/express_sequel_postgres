const express = require('express');

const profileRoute = express.Router();
const profileController = require('../controllers/profileController');

profileRoute.post('/:id/profile', profileController.create);
profileRoute.get('/:id/profile', profileController.find);
profileRoute.put('/:id/profile', profileController.update);
profileRoute.delete('/:id/profile', profileController.delete);

module.exports = profileRoute;
