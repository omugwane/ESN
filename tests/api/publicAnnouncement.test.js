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


describe('public announcement routes', () => {
	test('Should get all saved public announcements', (done) => {
		request(app).get('/publicAnnouncement').then((response) => {
			try {
				expect(response.statusCode).toBe(200);
				done();
			} catch (e) {
				done.fail(e);
			}
		});
	});

	test('Should get chats by content', (done) => {
		request(app).get('/chats/Hello').then((response) => {
			try {
				expect(response.statusCode).toBe(200);
				done();
			} catch (e) {
				done.fail(e);
			}
		});
	});

	test('Should save an announcement', (done) => {
		const User = require('../../models/User');

		let user = new User();
		user.username = 'Alain';
		user.password = '1234';
		user.role = 'Citizen';
		user.status = 'undefined';

		user.save((err) => {
			if (err)
				done.fail(err);

			request(app).post('/publicAnnouncement')
				.send({
					sender: user.username,
					content: 'emergency, stay indoors'
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