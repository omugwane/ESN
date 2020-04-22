let PublicAnnouncement = require('../../models/PublicAnnouncements');
const dbHandler = require('../../config/db-handler');
const Announcements = require('../../models/PublicAnnouncements');

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


describe('Testing Public Announcement Model', () => {
    it('Should save successfully', () => {
        let publicAnnouncement = new PublicAnnouncement();
        publicAnnouncement.sender = 'kaka';
        publicAnnouncement.content = 'Hello Ka';

        publicAnnouncement.save((err) => {
            expect(err).toBeNull();
        });

    });
    it('Should get all public announcements successfully', (done) => {
        let publicAnnouncement = new PublicAnnouncement();
        publicAnnouncement.sender = 'kaka';
        publicAnnouncement.content = 'Hello';

        publicAnnouncement.save((err) => {
            if (!err) {
                try {
                    PublicAnnouncement.find({}, (err, publicAnnouncement) => {
                        try {
                            expect(publicAnnouncement.length).toBeGreaterThan(0);
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

    test("Should search announcement successfully", done => {
        let announcement = new Announcements();
        announcement.sender = 'user';
        announcement.content = 'This an announcement';

        announcement.save((err) => {
            if (!err) {
                Announcements.find({receiver: null}, (error, docs) => {
					expect(error).toBeNull(); //If error is null, the docs is not null. The test case is successful
					done();
                });
            } else
                done.fail(err);
        });
    })
});