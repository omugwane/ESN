const mongoose = require('mongoose')
let UserRepository = require('../../repositories/UserRepository')

const dbHandler = require('./../db-handler');


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
})
