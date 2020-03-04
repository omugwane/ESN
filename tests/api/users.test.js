const request = require('supertest');
const app = require('../../app').app;
const dbHandler = require('../../config/db-handler');

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());


describe('user routes', () => {
    it('Should get all users', (done) => {
        request(app).get('/users').then((response) => {
            try {
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should save a user', (done) => {
        request(app).post('/users')
            .send({
                username: 'me',
                password: '1234',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                phone: 'phone',
                role: 'Citizen',
                status: 'OK'
            }).then((response) => {
            try {
                console.log("Saving user", response.body)
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should log a user into the application', (done) => {
        request(app).post('/users/login').send({
            username: 'me',
            password: '1234'
        }).then((response) => {
            try {
                console.log("Login ", response.body)
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it("Should update a user's status", (done) => {
        request(app).put('/users/me')
            .send({status: 'Help'}).then((response) => {
            try {
                console.log("Update user status:  ", response.body)
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
