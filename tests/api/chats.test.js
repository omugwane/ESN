const request = require('supertest');
const app = require('../../app').app;

// app.use('/users', usersRouter);
// app.use('/chats', chatsRouter);

describe('Chats routes', () => {
    test('Should get all saved chats', (done) => {
        request(app).get('/chats').then((response) => {
            try{
                expect(response.statusCode).toBe(200);
                done();
            }catch (e) {
                done.fail(e);
            }
        });
    });
});