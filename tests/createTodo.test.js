const app = require('../app');
const request = require('supertest');

test('Create New Todo', (done) => {
    const newTodo = {
        title: 'New Todo 7',
        time: '9 am',
        schedule: 'working',
    };

    request(app)
        .post('/api/v1/todo')
        .send(newTodo)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
           
            expect(response.body.message).toBe('Todo created successfully');
            expect(response.body.data.title).toBe('New Todo 7');
            done();
        })
        .catch(done);
});
