const Chat = require('../../models/Chat');

describe('Testing Chat Model', () => {
    it('Should save successfully', () => {
        let chat = new Chat();
        chat.author = 'kaka';
        chat.target = ''
        chat.content = 'Hello Ka';
        chat.status = 'sdjjh';
        chat.receiver = null;

        chat.save((err) => {
            expect(err).toBeNull()
        });

    })
})