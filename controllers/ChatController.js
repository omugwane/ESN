const Chat = require('../models/Chat');

exports.getAllChats = function (req, res) {
    Chat.find({}, (err, docs) => {

        if (err) {
            res.status(500).json({ data: Null });
        } else {
            let responseObject = {
                data: docs,
            }
            res.status(200).json(responseObject);
        }

    });
}

exports.saveChat = function (req, res) {
    let chat = new Chat();
    chat.content = req.body.content;
    chat.save((err) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({ "message" : "success", data: []})
        }
    });
}

exports.getChatByID = function (req, res) {
    Chat.findById(req.params.chat_id, (err, doc) => {
         if (err) {
            res.status(404).json({ data: Null });
        } else {
            let responseObject = {
                data: doc,
            }
            res.status(200).json(responseObject);
        }
    });
}

exports.getChatsByUsername = function (req, res) {
    let filter = { author: req.username._id };
    Chat.find(filter).populate('author', (err, docs) => {
         if (err) {
            res.status(404).json({ data: Null });
        } else {
            let responseObject = {
                data: docs,
            }
            res.status(200).json(responseObject);
        }
    });
}