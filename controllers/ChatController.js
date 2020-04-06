const Chat = require('../models/Chat');
const BroadcastAPI = require('../lib/BroadcastAPI');
// const App = require('../app');
const chatRepository = require('../repositories/ChatRepository');
const userRepository = require('../repositories/UserRepository');

//a method to retrive all chats from the database. it does not take
//any arguments. it call the chatRepository.getAllChats(callback) method
exports.getAllChats = function (req, res) {

    let callback = (docs) => {

        if (docs === null) {
            res.status(500).json({data: null});
        } else {
            let responseObject = {
                data: docs,
            };
            res.status(200).json(responseObject);
        }
    };
    chatRepository.getAllChats(callback);

};

//a method that retrives chats by the given username. it takes a 
//response and request object as arguments and returns a jason object of the retrived
//chats. it call chatRepository.getChatsByUsername(filter,callback) method
exports.getChatsByUsername = function (req, res) {
    let callback = (docs) => {
        if (docs === null) {
            res.status(500).json({data: null});
        } else {
            let responseObject = {
                data: docs,
            };
            res.status(200).json(responseObject);
        }
    };
    chatRepository.getChatsByUsername(req.params.username, callback);
};

exports.getPrivateChats = function (req, res) {

    let username1 = req.params.username1;
    let username2 = req.params.username2;


    let callback = (docs) => {
        if (docs === null) {
            res.status(500).json({data: null});
        } else {
            let responseObject = {
                data: docs,
            };
            res.status(200).json(responseObject);
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
                    BroadcastAPI.broadcastEventToAll(newChat);
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
                receiver: req.body.receiver
            };

            if (Object.keys(req.files).length !== 0) {
                let video = req.files.video;

                chatRepository.saveChatWithFile(video, chat, (newChat,error) => {
                    if (newChat) {
                        BroadcastAPI.broadcastEventToAll(newChat);

                        res.status(200).json({message: 'Chat was successfull saved!', data: newChat});
                    } else
                        res.status(500).json({message: 'Saving the chat message failed',error: error, data: null});
                });
            }else {
				res.status(400).json({message: 'File is missing!', data: null});
			}
        } else {
            res.status(500).json({message: "Saving the chat message failed. Chat's sender not found!", data: null});
        }
    });
};

