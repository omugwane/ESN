const Chat = require('../models/Chat');
const BroadcastAPI = require('../lib/BroadcastAPI');
// const App = require('../app');
const chatRepository = require('../repositories/ChatRepository');
const userRepository = require('../repositories/UserRepository');
const fs = require("fs");
const mv = require("mv");
const path = require("path");
const formidable = require("formidable");

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
let directory = path.join(__dirname,"../public/images");
exports.saveChat = (req, res) => {
	let form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var filename =null
		if(files.image!=null){
			var oldpath = files.image.path;
			var newpath = path.join(directory,files.image.name);
			filename=files.image.name;
			mv(oldpath, newpath, function (err) {
				if (err) throw err; 
			});
		}
		
	  userRepository.getUserByUsername(fields.sender, (user) => {
		if (user) {
			var receiver =null
			if(fields.reciever !="")
			receiver=fields.reciever;
			let chat = {
				sender: user.username,
				content: fields.content,
				status: user.status,
				receiver:receiver,
				filename: filename
			};

			chatRepository.saveChat(chat, (newChat) => {
				if (newChat) {
					// chatBroadcaster.broadcast(newChat);
					BroadcastAPI.broadcastEventToAll(newChat);

					res.status(200).json({message: 'success', data: newChat});
				} else
					res.status(500).json({message: 'Saving the chat message failed', data: null});
			});
		} else {
			res.status(500).json({message: 'Saving the chat message failed', data: null});
		}
	});
	});
	
};


//delete a chat
exports.deleteChat = async (req, res) => {
	try {
		const deletedMessage = Chat.remove({_id: req.params.chatId});
		res.status(200).json({message: 'Chat deleted successfully'});
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
		res.status(200).json({message: 'chat updated'});
	} catch (err) {
		res.status(500).json({message: err});
	}
};

