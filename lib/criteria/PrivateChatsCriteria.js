const Chat = require('../../models/Chat')

class PrivateChatsCriteria {
    constructor(value) {
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {$text: {$search: this.searchWords}};
        Chat.find(filter, (err, chats) => {
            let filteredChats;
            if (!err) {
                console.log("Filtering for Private chats");
                filteredChats = chats.filter((chat) => {
                    return chat.receiver !== null; //Keeping only private chats
                });
            }
            callback(err, filteredChats);
        });
    }
}

module.exports = PrivateChatsCriteria;