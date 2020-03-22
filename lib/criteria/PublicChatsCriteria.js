const Chat = require('../../models/Chat')

class PublicChatsCriteria {
    constructor(value) {
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {$text: {$search: this.searchWords}};
        Chat.find(filter, (err, chats) => {
            // console.log('PublicChatsCriteria chats::', chats)
            if (!err) {
                chats.filter((chat) => {
                    return chat.receiver === null; //Keeping only public chats
                });
            }
            callback(err, chats);
        });
    }
}

module.exports = PublicChatsCriteria;