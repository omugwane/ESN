const Chat = require('../models/Chat');

//get all chats
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

//save chat
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

//get chat by id
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

//get chat by username
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

//delete a chat
exports.deleteChat = async(req,res)=> {
    try{
        const deletedMessage= Chat.remove({_id:req.params.chatId});
        res.status(200).res({ message: "Chat deleted successfully" });
    }catch(err){
        res.status(500).json({message:err});
    }
};

//update a chat
exports.updateChat=async (req,res)=>{
    try{
        const updatedMessage=await Chat.updateOne(
            {_id:req.params.chatId},
            {$set:{content:req.body.content}}
        );
        res.status(200).res({message:"chat updated"});
    }catch(err){
        res.status(500).json({message:err});
    }
};
