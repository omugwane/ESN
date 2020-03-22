const Announcements = require('../models/PublicAnnouncements');

//method to save the details of an announcements to the database.
//it takes an object containing the details of a chat as an 
//argument and a callback as arguments
exports.postAnnouncement = (data, callback) => {

	let announcement = new Announcements();
	announcement.sender = data.sender;
	announcement.content = data.content;

	let callback1 = (err) => {

		if (err) {
			callback(null);
		} else {
			callback(announcement);
		}
	};
	announcement.save(callback1);
};

//method to retrive all announcements from the database. it takes a callback
//as an argument and returns an object of the retrived chats.
exports.getAllAnnouncements = (callback) => {
	let callback1 = (err, docs) => {

		if (err) {
			callback(null);
		} else {
			callback(docs);
		}

	};
	Announcements.find({receiver: null}, callback1);
};

//a method to retrive chats from the database by username. it takes the 
//username and a callback as arguments and returns a an object containing
//the user's chats.
exports.getAnnouncementsByContent = (content, callback) => {
	let callback1 = (err, docs) => {

		if (err) {
			callback(null);
		} else {
			callback(docs);
		}
	};

	Announcements.find({content: content}, callback1);
};

