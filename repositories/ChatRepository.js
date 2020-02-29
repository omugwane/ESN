const Chat = require('../models/Chat');


//method to save the details of a user's chat to the database.
//it takes an object containing the details of a chat as an 
//argument and a callback as arguments
exports.saveChat = (chatData,callback) => {

    let chat = new Chat();
    chat.author = chatData.author;
    chat.target = chatData.target
    chat.content = chatData.content;
    chat.status = chatData.status;
    chat.receiver = chatData.receiver;


    let callback1= (err) => {

        if (err) {
            callback(null)
        } else {
           callback(chat)
        }
    }
    chat.save(callback1)
    /*chat.save((err) => {
=======
    chat.save((err) => {
>>>>>>> 0ef96b666afb6ff14de71e9d3181eff9e9c2444e
        if (err)
            callback(null)
        else
<<<<<<< HEAD
            return true
    });*/
};

//method to retrive all chats from the database. it takes a callback
//as an argument and returns an object of the retrived chats.
exports.getAllChats = (callback)=> {
    let chat = new Chat();
    let callback1= (err, docs) => {

        if (err) {
            callback(null)
        } else {
           callback(docs)
        }

    }
    chat.find({},callback1);
}

//a method to retrive chats from the database by username. it takes the 
//username and a callback as arguments and returns a an object containing
//the user's chats.
exports.getChatsByUsername = (filter,callback)=> {
    let chat = new Chat();
    let callback1 = (err, docs) => {

        if (err) {
            callback(null)
        } else {
            callback(docs)
        }
    }

    chat.find(filter,callback1);

}