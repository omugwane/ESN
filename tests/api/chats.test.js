/* eslint-disable no-undef */
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


describe('Chats routes', () => {
	test('Should get all saved public chats', (done) => {
		request(app).get('/chats').then((response) => {
			try {
				expect(response.statusCode).toBe(200);
				done();
			} catch (e) {
				done.fail(e);
			}
		});
	});

	test('Should get chats by Username', (done) => {
		request(app).get('/chats/bapt').then((response) => {
			try {
				expect(response.statusCode).toBe(200);
				done();
			} catch (e) {
				done.fail(e);
			}
		});
	});

	test('Should get private chats', (done) => {
		request(app).get('/chats/bapt/peter').then((response) => {
			try {
				expect(response.statusCode).toBe(200);
				done();
			} catch (e) {
				done.fail(e);
			}
		});
	});

	test('Should save chats', (done) => {
		const User = require('../../models/User');

		let user = new User();
		user.username = 'Alain';
		user.password = '1234';
		user.role = 'Citizen';
		user.status = 'undefined';

		user.save((err) => {
			if (err)
				done.fail(err);

			request(app).post('/chats')
				.send({
					sender: user.username,
					content: 'hey',
					status: user.status
				}).then((response) => {
					try {
						expect(response.statusCode).toBe(200);
						done();
					} catch (e) {
						done.fail(e);
					}

				});
		});
	});

});