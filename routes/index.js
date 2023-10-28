const route = require('express').Router();
// pemanggilan route todo di folder routes
const todoRoute = require('./todo')

route.use('/todo', todoRoute);

module.exports = route;