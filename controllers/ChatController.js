const Chat = require('../models/Chat');
const BroadcastAPI = require('../lib/BroadcastAPI');
// const App = require('../app');
const chatRepository = require('../repositories/ChatRepository');
const userRepository = require('../repositories/UserRepository');

//a method to retrive all chats from the database. it does not take
//any arguments. it call the chatRepository.getAllChats(callback) method
exports.getAllChats = function (req, res) {

    chatRepository.getAllChats((chats, error) => {
        if (chats === null) {
            res.status(500).json({data: null, error: error});
        } else {
            filterOutChatsForInactiveUser(chats,(docs) => {
                res.status(200).json({data: docs});
            });
        }
    });

};

//a method that retrives chats by the given username. it takes a 
//response and request object as arguments and returns a jason object of the retrived
//chats. it call chatRepository.getChatsByUsername(filter,callback) method
exports.getChatsByUsername = function (req, res) {
    let callback = (chats) => {
        if (chats === null) {
            res.status(500).json({data: null});
        } else {
            filterOutChatsForInactiveUser(chats,(docs) => {
                res.status(200).json({data: docs});
            });
        }
    };
    chatRepository.getChatsByUsername(req.params.username, callback);
};

exports.getPrivateChats = function (req, res) {

    let username1 = req.params.username1;
    let username2 = req.params.username2;


    let callback = (chats) => {
        if (chats === null) {
            res.status(500).json({data: null});
        } else {
            filterOutChatsForInactiveUser(chats,(docs) => {
                res.status(200).json({data: docs});
            });
        }
    };
    chatRepository.getPrivateChats(username1, username2, callback);
};

//method to save chats to the database. it takes as arguments request and response
//objects and returns a jason object. it calls chatRepository.saveChat method.
exports.saveChat = (req, res) => {
    userRepository.getUserByUsername(req.body.sender, (user) => {
        if (user) {
            let chat = {
                sender: user.username,
                content: req.body.content,
                status: user.status,
                receiver: req.body.receiver
            };

            chatRepository.saveChat(chat, (newChat) => {
                if (newChat) {
                    BroadcastAPI.broadcastChatEventToAll(newChat);
                    res.status(200).json({message: 'success', data: newChat});
                } else
                    res.status(500).json({message: 'Saving the chat message failed', data: null});
            });
        } else {
            res.status(500).json({message: 'Saving the chat message failed', data: null});
        }
    });
};


exports.saveUpload = (req, res) => {
    userRepository.getUserByUsername(req.body.sender, (user) => {
        if (user) {
            let chat = {
                sender: user.username,
                content: req.body.content,
                status: user.status,
                receiver: req.body.receiver === 'null' ? null : `${req.body.receiver}`
            };

            if (Object.keys(req.files).length !== 0) {
                let file = req.files.file;

                chatRepository.saveChatWithFile(file, chat, (newChat, error) => {
                    if (newChat) {
                        BroadcastAPI.broadcastChatEventToAll(newChat);

                        res.status(200).json({message: 'Chat was successfully saved!', data: newChat});
                    } else
                        res.status(500).json({message: 'Saving the chat message failed', error: error, data: null});
                });
            } else {
                res.status(400).json({message: 'File is missing!', data: null});
            }
        } else {
            res.status(500).json({message: "Saving the chat message failed. Chat's sender not found!", data: null});
        }
    });
};


let filterOutChatsForInactiveUser = (chats, callback) => {
    userRepository.getInactiveUsers((err, users) => {
        let filteredChats = [];

        if (users && users.length === 0) {
            filteredChats = chats;
        } else {
            users.forEach((user) => {
                let fChats = chats.filter(function (chat) {
                    return !(chat.sender === user.username || chat.receiver === user.username);
                });

                filteredChats.push(...fChats); //Appending new filtered chats
            });
        }
        callback(filteredChats);
    });
};

