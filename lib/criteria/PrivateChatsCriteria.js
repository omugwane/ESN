const Chat = require('../../models/Chat')

class PrivateChatsCriteria {
    constructor(username, value) {
        this.username = username;
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {$text: {$search: this.searchWords}};
        Chat.find(filter, (err, chats) => {
            let filteredChats;
            if (!err) {
                console.log("Filtering for Private chats");
                filteredChats = chats.filter((chat) => {
                    //Keeping only private chats the current user(username) sent or received
                    return (chat.sender === this.username && chat.receiver !== null) || chat.receiver === this.username;
                });
            }
            callback(err, filteredChats);
        });
    }
}

module.exports = PrivateChatsCriteria;