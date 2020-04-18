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

    test('Should upload a video with chat message', (done) => {
        const User = require('../../models/User');

        let user = new User();
        user.username = 'Alain';
        user.password = '1234';
        user.role = 'Citizen';
        user.status = 'undefined';

        user.save((err) => {
            if (err)
                done.fail(err);

            request(app).post('/chats/upload')
                .field({
                    content: "This is a chat with an attached image",
                    sender: user.username,
                    receiver: 'null'
                }).attach('file', 'tests/test_files/rufus.mp4')
                .end(function (err, response) {
                    if (err) {
                        done.fail(err);
                    } else {
                        // statusCode
                        expect(response.status).toBe(200);
                        done();
                    }
                });

        });
    });

    test('Should upload an image with chat message', (done) => {
        const User = require('../../models/User');

        let user = new User();
        user.username = 'Alain';
        user.password = '1234';
        user.role = 'Citizen';
        user.status = 'undefined';

        user.save((err) => {
            if (err)
                done.fail(err);

            request(app).post('/chats/upload')
                .field({
                    content: "This is a chat with an attached image",
                    sender: user.username,
                    receiver: 'bapt'
                }).attach('file', 'tests/test_files/image.png')
                .end(function (err, response) {
                    if (err) {
                        done.fail(err);
                    } else {
                        // statusCode
                        expect(response.status).toBe(200);
                        done();
                    }
                });

        });
    });
});