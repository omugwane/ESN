const mongoose = require('mongoose')
let ChatRepository = require('../../repositories/ChatRepository')
// let DB = require('../../config/DB')
let Chat = require('../../models/Chat')

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


describe('Chat Repository', () => {
    it('Should save a chat successfully', done => {
        let chat = {
            author: 'kaka',
            target: '',
            content: 'Hello Ka',
            status: 'sdjjh',
            receiver: null
        }

        ChatRepository.saveChat(chat, (result) => {
            try {
                expect(result.author).toBe(chat.author)
                done()
            } catch (error) {
                done.fail(error)
            }
        })
    })

    it('Should get Chats by Username successfully', done => {
        let chat = new Chat();
        chat.author = 'Trump'; //This is the username of the user who authored the chat
        chat.target = ''
        chat.content = 'Hi there';
        chat.status = 'Not available';
        chat.receiver = null;

        ChatRepository.saveChat(chat, (savedChat) => {
            try {
                ChatRepository.getChatsByUsername(chat.author, (chats) => {
                    try {
                        expect(chats.length).toBeGreaterThan(0);
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
