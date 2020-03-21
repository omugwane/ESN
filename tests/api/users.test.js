const request = require('supertest');
const app = require('../../app');
const dbHandler = require('../../config/db-handler');

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
	email: 'email',
	phone: 'phone',
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

	it('Should update a user\'s status', (done) => {
		request(app).post('/users').send(userForTest).then(() => {
			try {
				request(app).put('/users/status/' + userForTest.username).send({status: 'Help'}).then((response) => {
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
});
