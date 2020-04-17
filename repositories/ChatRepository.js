const Chat = require('../models/Chat');


//method to save the details of a user's chat to the database.
//it takes an object containing the details of a chat as an 
//argument and a callback as arguments
exports.saveChat = (chatData, callback) => {

    let chat = new Chat();
    chat.sender = chatData.sender;
    chat.content = chatData.content;
    chat.status = chatData.status;
    chat.receiver = chatData.receiver;


    let callback1 = (err) => {

        if (err) {
            callback(null);
        } else {
            callback(chat);
        }
    };
    chat.save(callback1);
};

//method to retrive all chats from the database. it takes a callback
//as an argument and returns an object of the retrived chats.
exports.getAllChats = (callback) => {
    Chat.find({receiver: null}, (err, docs) => {
        if (err) {
            callback(null, err);
        } else {
            callback(docs, err);
        }
    });
};

//a method to retrive chats from the database by username. it takes the 
//username and a callback as arguments and returns a an object containing
//the user's chats.
exports.getChatsByUsername = (username, callback) => {
    let callback1 = (err, docs) => {

        if (err) {
            callback(null);
        } else {
            callback(docs);
        }
    };

    Chat.find({sender: username}, callback1);

};

//a method to retrieve private chats from the database given username of the users .
exports.getPrivateChats = (username1, username2, callback) => {
    let callback1 = (err, docs) => {

        if (err) {
            callback(null);
        } else {
            callback(docs);
        }
    };

    Chat.find({$or: [{sender: username1, receiver: username2}, {sender: username2, receiver: username1}]}, callback1);


};

exports.saveChatWithFile = (videoFile, chatData, callback) => {
    storeVideo(videoFile, (fileType, filepath, err) => {
        let chat = new Chat();
        chat.sender = chatData.sender;
        chat.content = chatData.content;
        chat.status = chatData.status;
        chat.receiver = chatData.receiver;
        chat.type = fileType;
        chat.fileUrl = filepath;

        if (err)
            callback(null, err); //If the file type is not accepted

        chat.save((err) => {
            if (err) {
                callback(null, err);
            } else {
                callback(chat, null);
            }
        });
    })
};

/*
** Saves a file to the storage/hard disk and returns the relative filepath/filename
 */
let storeVideo = (uploadedFile, callback) => {
    let fileName = uploadedFile.name;
    let mimeType = uploadedFile.mimetype.split('/')[0];

    console.log("Image type", mimeType);
    fileName = new Date().getMilliseconds() + fileName; //Pre appending milliseconds just in cases files have same names

    let filepath = '';

    if (mimeType === 'video') {
        filepath = 'public/uploads/videos/' + fileName;
    } else if (mimeType === 'image')
        filepath = 'public/uploads/images/' + fileName;
    else
        callback(mimeType, null, {message: 'Unexpected file type.'})

    //Move file to uploads directory
    uploadedFile.mv(filepath, () => {
        callback(mimeType, filepath, null)
    });
};
