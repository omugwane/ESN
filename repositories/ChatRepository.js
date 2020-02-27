const Chat = require('../models/Chat');


exports.saveChat = (chatData) => {
    let chat = new Chat();
    chat.author = chatData.author;
    chat.target = chatData.target
    chat.content = chatData.content;
    chat.status = chatData.status;
    chat.receiver = chatData.receiver;
    chat.save((err) => {
        if (err)
            return false;
        else
            return true
    });
};
