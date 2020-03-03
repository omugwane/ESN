const User = require('../models/User');


//method to save the details of a user's chat to the database.
//it takes an object containing the details of a chat as an
//argument and a callback as arguments
exports.saveChat = (userData,callback) => {

    let user = new User();
    user.sender = userData.sender;
    user.content = userData.content;
    user.status = userData.status;
    user.receiver = userData.receiver;


    let callback1= (err) => {

        if (err) {
            callback(null)
        } else {
            callback(chat)
        }
    }
    chat.save(callback1)
};

//method to retrive all chats from the database. it takes a callback
//as an argument and returns an object of the retrived chats.
exports.getAllChats = (callback)=> {
    let callback1= (err, docs) => {

        if (err) {
            callback(null)
        } else {
            callback(docs)
        }

    }
    Chat.find({},callback1);
}

//a method to retrive chats from the database by username. it takes the
//username and a callback as arguments and returns a an object containing
//the user's chats.
exports.getChatsByUsername = (username,callback)=> {
    let callback1 = (err, docs) => {

        if (err) {
            callback(null)
        } else {
            callback(docs)
        }
    }

    Chat.find({author: username},callback1);

}