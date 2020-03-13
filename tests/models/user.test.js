const mongoose = require('mongoose');
let User = require('../../models/User');
// let DB = require('../../config/DB')
// let Chat = require('../../models/Chat')
const dbHandler = require('../../config/db-handler');
/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());
/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());
/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

describe('Testing User Model', () => {
	it('Should save successfully', done => {
		let user = new User();
		user.username = 'me';
		user.password = '1234';
		user.firstName = 'firstName';
		user.lastName = 'lastName';
		user.email = 'email';
		user.phone = 'phone';
		user.role = 'Citizen';
		user.status = 'OK';
		user.save((err) => {
			expect(err).toBeNull();
			done();
		});
	});
});