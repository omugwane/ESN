const request = require('supertest');
const app = require('../../app').app;
 
describe('user routes', () => {
    it.only('Should get all users', (done) => {
        request(app).get('/users').then((response) => {
            try{
                expect(response.statusCode).toBe(200);
                done();
            }catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should delete a user by user id', (done) => {
        request(app).delete('/users').send({userId:''}).then((response) => {
            try{
                expect(response.statusCode).toBe(200);
                done();
            }catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should save a user', (done) => {
        request(app).post('/users')
        .send({
            username:'me',
            password :'1234',
            firstName: 'firstName',
            lastName :'lastName',
            email : 'email',
            phone : 'phone',
            role :'Citizen',
            status : 'OK'
        }).then((response) => {
            try{
                expect(response.statusCode).toBe(200);
                done();
            }catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should log a user into the application', (done) => {
        request(app).post('/users/login').send({
            username:'me',
            password :'1234'
        }).then((response) => {
            try{
                expect(response.statusCode).toBe(200);
                done();
            }catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should update a user\'s status', (done) => {
        request(app).patch('/users/username')
        .send({username:''}).send({
            username:'me',
            status :'ok'
        }).then((response) => {
            try{
                expect(response.statusCode).toBe(200);
                done();
            }catch (e) {
                done.fail(e);
            }
        });
    });
});
