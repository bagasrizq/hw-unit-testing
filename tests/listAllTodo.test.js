const app = require('../app');
const request = require('supertest');

test('Get Message Success From List Todo API', (done) => {
    request(app)
        .get('/api/v1/todo/all')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.message).toBe('success');
            done();
        })
        .catch(done);
});

