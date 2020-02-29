const Chat = require('../models/Chat');
// const chatBroadcaster = require('../bin/www')
const add = require('../app');
const chatRepository = require('../repositories/ChatRepository')

//get all chats
exports.getAllChats = function (req, res) {

    let callback = (docs) => {
        if (docs === null) {
            res.status(500).json({data: Null});
        } else {
            let responseObject = {
                data: docs,
            }
            res.status(200).json(responseObject);
        }
    }

    chatRepository.getChats(callback)
}

//save chat
exports.saveChat = (req, res) => {
    let chat = {
        author: req.body.author,
        target: req.body.target,
        content: req.body.content,
        status: req.body.status,
        receiver: req.body.receiver
    }

    if (chatRepository.saveChat(chat)) {
        res.status(500).json(err);
    } else {
        chatBroadcaster.broadcast(chat)
        res.status(200).json({"message": "success", data: []})
    }
}

//get chat by id
exports.getChatByID = function (req, res) {
    Chat.findById(req.params.chatId, (err, doc) => {
        console.log(doc);
        if (err) {
            res.status(404).json({data: Null});
        } else {
            let responseObject = {
                data: doc,
            }
            res.status(200).json(responseObject);
        }
    });
}

//get chat by username
exports.getChatsByUsername = function (req, res) {
    let filter = {author: req.username._id};
    Chat.find(filter).populate('author', (err, docs) => {
        if (err) {
            res.status(404).json({data: Null});
        } else {
            let responseObject = {
                data: docs,
            }
            res.status(200).json(responseObject);
        }
    });
}

//delete a chat
exports.deleteChat = async (req, res) => {
    try {
        const deletedMessage = Chat.remove({_id: req.params.chatId});
        res.status(200).json({message: "Chat deleted successfully"});
    } catch (err) {
        res.status(500).json({message: err});
    }
};

//update a chat
exports.updateChat = async (req, res) => {
    try {
        const updatedMessage = await Chat.updateOne(
            {_id: req.params.chatId},
            {$set: {content: req.body.content}}
        );
        res.status(200).json({message: "chat updated"});
    } catch (err) {
        res.status(500).json({message: err});
    }
};
