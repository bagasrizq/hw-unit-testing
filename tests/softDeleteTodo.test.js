const app = require('../app');
const request = require('supertest');

test('Soft Delete Todo', (done) => {
    request(app)
        .delete('/api/v1/todo/5')
        .expect(200)
        .then(response => {
            expect(response.body.message).toBe('Todo deleted successfully');
            done();
        })
        .catch(done);
});
