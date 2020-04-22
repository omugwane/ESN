/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const dbHandler = require('../../config/db-handler');
const User = require('../../models/User');
const Chat = require('../../models/Chat');

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

describe('Chats routes', () => {
    it('Should get all saved public chats', (done) => {
        request(app).get('/chats').then((response) => {
            try {
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should get chats by Username', (done) => {
        request(app).get('/chats/bapt').then((response) => {
            try {
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should get private chats', (done) => {
        request(app).get('/chats/bapt/peter').then((response) => {
            try {
                expect(response.statusCode).toBe(200);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    it('Should save chats', (done) => {
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

    it('Should upload a video with chat message', (done) => {
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

    it('Should upload an image with chat message', (done) => {
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

    it('Should search public chats', (done) => {
        let user = new User();
        user.username = 'Alain';
        user.password = '1234';
        user.role = 'Citizen';
        user.status = 'undefined';

        user.save((err) => {
            if (err)
                done.fail(err);

            let chat = new Chat();
            chat.sender = user.username;
            chat.content = 'This is music';
            chat.status = user.status;
            chat.receiver = null;

            chat.save((err) => {
                request(app).post('/search')
                    .send({
                        context: 'public_chats',
                        criteria: '',
                        searchText: 'music',
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

    it('Should search private chats', (done) => {
        let chat = new Chat();
        chat.sender = 'Alain';
        chat.content = 'This is music';
        chat.status = 'OK';
        chat.receiver = 'bapt';
        chat.save((err) => {
            if (!err){
                request(app).post('/search').send({
                    context: 'private_chats',
                    criteria: '',
                    searchText: 'music',
                    username: 'Alain'
                }).then((response) => {
                    try {
                        console.log(response.body);
                        expect(response.body.data.length).toBe(1);
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
});