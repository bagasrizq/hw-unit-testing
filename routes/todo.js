// router
const route = require('express').Router();
// panggil dari controller dan filenya (./controllers/todo)
const controller = require('../controller/todo');

// set route => panggil (controller.listTodo) di folder (./controllers/todo)

// route listAllTodo
route.get('/all', controller.listAllTodo);

// route detailTodo
route.get('/:id', controller.getTodoDetail);

// route creatTodo
route.post('/', controller.createTodo);

// route softDeleteTodo
route.delete('/:id', controller.deleteTodo);

module.exports = route;