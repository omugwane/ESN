let ChatRepository = require('../../repositories/ChatRepository')
let Chat = require('../../models/Chat')

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


describe('Chat Repository', () => {
    it('Should save a chat successfully', done => {
        let chat = {
            sender: 'kaka',
            content: 'Hello Ka',
            status: 'sdjjh',
            receiver: null
        }

        ChatRepository.saveChat(chat, (result) => {
            try {
                expect(result.sender).toBe(chat.sender)
                done()
            } catch (error) {
                done.fail(error)
            }
        })
    })

    it('Should get Chats by Username successfully', done => {
        let chat = new Chat();
        chat.sender = 'Trump'; //This is the username of the user who authored the chat
        chat.content = 'Hi there';
        chat.status = 'Not available';
        chat.receiver = null;

        ChatRepository.saveChat(chat, (savedChat) => {
            try {
                ChatRepository.getChatsByUsername(chat.sender, (chats) => {
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

    it('Should get all successfully', done => {
        let chat = new Chat();
        chat.sender = 'Trump'; //This is the username of the user who authored the chat
        chat.content = 'Hi there';
        chat.status = 'Not available';
        chat.receiver = null;

        ChatRepository.saveChat(chat, (savedChat) => {
            try {
                ChatRepository.getAllChats((chats) => {
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
    it('Should get 0 public chats if all the saved chats are private', done => {
        let chat = new Chat();
        chat.sender = 'Trump'; //This is the username of the user who authored the chat
        chat.content = 'Hi there';
        chat.status = 'Not available';
        chat.receiver = 'Donald';

        ChatRepository.saveChat(chat, (savedChat) => {
            try {
                ChatRepository.getAllChats((chats) => {
                    try {
                        expect(chats.length).toBe(0);
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
    it('Should get all private chats successfully betwween two users', (done) => {
        let chat =  new Chat();
        chat.sender = 'Laurette';
        chat.content = 'Hey';
        chat.status = 'Undefined';
        chat.receiver = 'Baptiste';

        // let chat1 =  new Chat();
        // chat.sender = 'Baptiste';
        // chat.content = 'How are you?';
        // chat.status = 'Undefined';
        // chat.receiver = 'Laurette';


            // console.log("Chat 1 error",err1)
            chat.save((err2) => {
                try {
                    ChatRepository.getPrivateChats('Laurette','Baptiste',(chats) => {
                        try {
                            // console.log(chats)
                             expect(chats.length).toBe(1);
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
