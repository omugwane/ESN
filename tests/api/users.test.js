const request = require('supertest');
const app = require('../../app');
const dbHandler = require('../../config/db-handler');
let userRepository = require('../../repositories/UserRepository');

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

const userForTest = {
    username: 'test-username',
    password: '1234',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email@gmail.com',
    phone: '01454885',
    role: 'Citizen',
    status: 'OK'
};

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

    it('Should get a user by username', (done) => {
        userRepository.registerUser(userForTest, (user) => {
            request(app).get('/users/' + userForTest.username).then((response) => {
                try {
                    expect(response.statusCode).toBe(200);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });

    it('Should save a user', (done) => {
        request(app).post('/users').send(userForTest).then((response) => {
            try {
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should log a user into the application', (done) => {
        request(app).post('/users').send(userForTest).then(() => {
            try {
                request(app).post('/users/login').send({username: userForTest.username, password: userForTest.password})
                    .then((response) => {
                        try {
                            expect(response.statusCode).toBe(200);
                            done();
                        } catch (e) {
                            done.fail(e);
                        }
                    });
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it("Should update a user profile information", (done) => {
        userRepository.registerUser(userForTest, (user) => {
            let oldUsername = userForTest.username;
            userForTest.username = 'NewUsername';
            request(app).put('/users/' + oldUsername).send(userForTest).then((response) => {
                try {
                    expect(response.statusCode).toBe(200);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });

    it('Should search citizens by username', (done) => {
        userRepository.registerUser(userForTest, (user) => {
            request(app).post('/search').send({
                context: 'citizens',
                criteria: 'username',
                searchText: userForTest.username
            }).then((response) => {
                try {
                    expect(response.body.data.length).toBe(1);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });

    it('Should search citizens by status', (done) => {
        userRepository.registerUser(userForTest, (user) => {
            request(app).post('/search').send({
                context: 'citizens',
                criteria: 'status',
                searchText: userForTest.status
            }).then((response) => {
                try {
                    expect(response.body.data.length).toBe(1);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
