/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const dbHandler = require('../../config/db-handler');
const Roles = require("../../lib/Role");
const User = require('../../models/User');
const Announcement = require('../../models/PublicAnnouncements');

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());


describe('public announcement routes', () => {
    it('A Citizen should not post an announcement', (done) => {
        let citizen = new User();
        citizen.username = 'Alain';
        citizen.password = '1234';
        citizen.role = Roles.CITIZEN;
        citizen.status = 'undefined';

        citizen.save((err) => {
            if (err)
                done.fail(err);

            request(app).post('/announcements')
                .send({
                    sender: citizen.username,
                    content: 'emergency, stay indoors'
                }).then((response) => {
                try {
                    expect(response.statusCode).toBe(401);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
    it('Should get announcements by content', (done) => {
        let announcement = new Announcement();
        announcement.sender = 'user';
        announcement.content = 'This an announcement';
        announcement.save((err) => {
            if (!err) {
                request(app).get('/announcements/announcement').then((response) => {
                    try {
                        expect(response.statusCode).toBe(200);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            } else {
                done.fail(err);
            }
        });
    });
    it('Should get all saved public announcements', (done) => {
        request(app).get('/publicAnnouncement').then((response) => {
            try {
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
    it('Should save an announcement', (done) => {
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
                    // expect(response.statusCode).toBe(200);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
    it('A Coordinator should post an announcement', (done) => {
        let coordinator = new User();
        coordinator.username = 'Alain';
        coordinator.password = '1234';
        coordinator.role = Roles.COORDINATOR;
        coordinator.status = 'undefined';

        coordinator.save((err) => {
            if (err)
                done.fail(err);

            request(app).post('/announcements')
                .send({
                    sender: coordinator.username,
                    content: 'I am a coordinator'
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
    it('An inactive Coordinator should not post an announcement', (done) => {
        let coordinator = new User();
        coordinator.username = 'Alain';
        coordinator.password = '1234';
        coordinator.role = Roles.COORDINATOR;
        coordinator.status = 'undefined';
        coordinator.active = false;

        coordinator.save((err) => {
            if (err)
                done.fail(err);

            request(app).post('/announcements')
                .send({
                    sender: coordinator.username,
                    content: 'I am an inactive coordinator'
                }).then((response) => {
                try {
                    console.log(response.body.message)
                    expect(response.statusCode).toBe(401); //401 code represents an unauthorized request
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
    it('An Administrator should post an announcement', (done) => {
        let administrator = new User();
        administrator.username = 'ADMIN';
        administrator.password = 'password123';
        administrator.role = Roles.ADMINISTRATOR;
        administrator.status = 'OK';

        administrator.save((error) => {
            if (error)
                done.fail(err);

            request(app).post('/announcements')
                .send({
                    sender: administrator.username,
                    content: 'I am an administrator'
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
    it('Should search announcements', (done) => {
        let user = new User();
        user.username = 'Alain';
        user.password = '1234';
        user.role = 'Citizen';
        user.status = 'undefined';

        user.save((err) => {
            if (err)
                done.fail(err);

            let announcement = new Announcement();
            announcement.sender = user.username;
            announcement.content = 'emergency, stay indoors';

            announcement.save((err) => {
                request(app).post('/search')
                    .send({
                        context: 'announcements',
                        criteria: '',
                        searchText: 'stay',
                        username: user.username
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
});
