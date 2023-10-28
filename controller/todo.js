const data = require('../src/data')

class TodoController {
    // listAllTodo
    static listAllTodo(req, res, next) {
        const todoList = {
            data: data.todos,
            message: 'success'
        }
        res.status(200).json(todoList);
    }

    // detailTodo
    static getTodoDetail(req, res, next) {
        const todoId = parseInt(req.params.id); // Ambil id dari URL dan ubah ke tipe data integer
        const todo = data.todos.find(todo => todo.id === todoId);

        if (todo) {
            res.status(200).json({
                data: todo,
                message: 'success'
            });
        } else {
            res.status(404).json({
                message: 'Todo not found'
            });
        }
    }

    // createTodo
    static createTodo(req, res, next) {
        const newTodo = req.body;

        data.todos.push(newTodo);

        res.status(201).json({
            data: newTodo,
            message: 'Todo created successfully'
        });
    }

    // softDeleteTodo
    static deleteTodo(req, res, next) {
        const todoId = parseInt(req.params.id);
        const todoIndex = data.todos.findIndex(todo => todo.id === todoId);

        if (todoIndex !== -1) {
            data.todos.splice(todoIndex, 1);
            res.status(200).json({
                message: 'Todo deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Todo not found'
            });
        }
    }
}

module.exports = TodoController;
