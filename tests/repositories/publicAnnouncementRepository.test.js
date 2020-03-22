let PublicAnnouncementsRepository = require('../../repositories/PublicAnnouncementsRepository');
let Announcement = require('../../models/PublicAnnouncements');

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


describe('Public Announcement Repository', () => {
	it('Should save a Public Announcement successfully', done => {
		let announcement = {
			sender: 'kaka',
			content: 'Hello Ka'
		};

		PublicAnnouncementsRepository.postAnnouncement(announcement, (result) => {
			try {
				expect(result.sender).toBe(announcement.sender);
				done();
			} catch (error) {
				done.fail(error);
			}
		});
	});

	it('Should get announcements by content successfully', done => {
		let announcement = new PublicAnnouncements();
		announcement.sender = 'Trump'; 
		announcement.content = 'Hi there';

		PublicAnnouncementsRepository.postAnnouncement(announcement, (savedAnnouncement) => {
			try {
				PublicAnnouncementsRepository.getAnnouncementsByContent(announcement.content , (announcements) => {
					try {
						expect(announcements.length).toBeGreaterThan(0);
						done();
					} catch (error) {
						done.fail(error);
					}
				});
			} catch (error) {
				done.fail(error);
			}
		});
	});

	it('Should get all successfully', done => {
		let announcement = new PublicAnnouncements();
		announcement.sender = 'Trump'; 
		announcement.content = 'Hi there';

		PublicAnnouncementsRepository.postAnnouncement(chat, (savedAnnouncement) => {
			try {
				PublicAnnouncementsRepository.getAllAnnouncements((announcements) => {
					try {
						expect(announcements.length).toBeGreaterThan(0);
						done();
					} catch (error) {
						done.fail(error);
					}
				});
			} catch (error) {
				done.fail(error);
			}
		});
	});
});
