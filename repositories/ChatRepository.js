const Chat = require('../models/Chat');


exports.saveChat = (chatData, callback) => {
    let chat = new Chat();
    chat.author = chatData.author;
    chat.target = chatData.target
    chat.content = chatData.content;
    chat.status = chatData.status;
    chat.receiver = chatData.receiver;

    chat.save((err) => {
        if (err)
            callback(null)
        else
            return callback(chat)
    })
};

exports.getChats = (callback) => {

    let done = (err, docs) => {
        if (err) {
            callback(null)
        } else {
            callback(docs)
        }
    }

    Chat.find({}, done);
}