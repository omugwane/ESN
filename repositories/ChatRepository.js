const Chat = require('../models/Chat');


//method to save the details of a user's chat to the database.
//it takes an object containing the details of a chat as an 
//argument and a callback as arguments
exports.saveChat = (chatData,callback) => {

    let chat = new Chat();
    chat.sender = chatData.sender;
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
    Chat.find({receiver: null},callback1);
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

    Chat.find({sender: username},callback1);

}
//a method to retrieve private chats from the database given username of the users .
exports.getPrivateChats = (username1,username2,callback)=> {
    let callback1 = (err, docs) => {

        if (err) {
            callback(null)
        } else {
            callback(docs)
        }
    }

    Chat.find({$or: [ {sender: username1, receiver: username2}, {sender: username2, receiver: username1}]},callback1);


}
