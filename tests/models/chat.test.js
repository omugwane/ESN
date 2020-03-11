let Chat = require('../../models/Chat');
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


describe('Testing Chat Model', () => {
	it('Should save successfully', () => {
		let chat = new Chat();
		chat.sender = 'kaka';
		chat.content = 'Hello Ka';
		chat.status = 'sdjjh';
		chat.receiver = null;

		chat.save((err) => {
			expect(err).toBeNull();
		});

	});
	it('Should get all chats successfully', (done) => {
		let chat = new Chat();
		chat.sender = 'kaka';
		chat.content = 'Hello Ka';
		chat.status = 'sdjjh';
		chat.receiver = null;

		chat.save((err) => {
			if (!err) {
				try {
					Chat.find({}, (err, chats) => {
						try {
							expect(chats.length).toBeGreaterThan(0);
							done();
						} catch (error) {
							done.fail(error);
						}
					});
				} catch (error) {
					done.fail(error);
				}
			}
		});

	});
});