const app = require('../app');
const request = require('supertest');

test('Get Todo Detail', (done) => {
    request(app)
        .get('/api/v1/todo/2') 
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            
            expect(response.body.message).toBe('success');
            expect(response.body.data.id).toBe(2); 
            done();
        })
        .catch(done);
});
