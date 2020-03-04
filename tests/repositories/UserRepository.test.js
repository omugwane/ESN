const mongoose = require('mongoose')
let UserRepository = require('../../repositories/UserRepository')
let User = require('../../models/User');
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


describe('User Repository', () => {
    it('Should save a user successfully', done => {
        let user = {
            username: 'me',
            password: '1234',
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            phone: 'phone',
            role: 'Citizen',
            status: 'OK'
        }
        UserRepository.registerUser(user, (result) => {
            try {
                expect(result.username).toBe(user.username)
                done()
            } catch (error) {
                done.fail(error)
            }
        })
    })

    it('Should get Users by Username successfully', done => {
        let user = {
            username: 'me',
            password: '1234',
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            phone: 'phone',
            role: 'Citizen',
            status: 'OK',
        }
        UserRepository.registerUser(user, (savedUser) => {
            try {
                UserRepository.getUserByUsername(user.username, (users) => {
                    try {
                        // expect(users.length).toBeGreaterThan(0);
                        done()
                    } catch (error) {
                        done.fail(error)
                    }
                })
            } catch (error) {
                done.fail(error)
            }
        });
    })

    it('Should get all users successfully', (done) => {
        let user = {
            username: 'me',
            password: '1234',
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            phone: 'phone',
            role: 'Citizen',
            status: 'OK'
        }
        UserRepository.registerUser(user, (savedUser) => {
                try {
                    UserRepository.getAllUsers((users) => {
                        try {
                            expect(users.length).toBeGreaterThan(0);
                            done()
                        } catch (error) {
                            done.fail(error)
                        }
                    })
                } catch (error) {
                    done.fail(error)
                }
        });
    })
})

