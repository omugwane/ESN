const User = require('../models/User');


//method to save the details of a user's chat to the database.
//it takes an object containing the details of a chat as an
//argument and a callback as arguments
exports.saveChat = (userData, callback) => {

	let user = new User();
	user.sender = userData.sender;
	user.content = userData.content;
	user.status = userData.status;
	user.receiver = userData.receiver;
	user.location = userData.location;
	user.rescuer = userData.rescuer;

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
exports.getAllUsers = (callback) => {
	let user = new User();
	let callback1 = (err, docs) => {

		if (err) {
			callback(null);
		} else {
			callback(docs);
		}

	};
	User.find({}, callback1);
};


//method to save the details of a user to the database.
//it takes an object containing the details of a user as an 
//argument and a callback as arguments
exports.registerUser = (userData, callback) => {
	let user = new User();
	user.username = userData.username;
	user.password = user.generateHash(userData.password);
	user.firstName = userData.firstName;
	user.lastName = userData.lastName;
	user.email = userData.email;
	user.phone = userData.phone;
	user.role = userData.role;
	user.status = userData.status;
	user.location = userData.location;
	user.rescuer = userData.rescuer;

	User.find({ username: userData.username }, (err, users) => {
		if (users && users.length === 0) {
			user.save((err) => {
				// console.log("registerUser", err)
				if (err)
					callback(null);
				else
					callback(user);
			});
		}
	});

};

//a method to get a single user by their username. it takes the username and a 
//callback as an argument and returns the details of the user
exports.getUserByUsername = (username, callback) => {
	let callback1 = (err, user) => {
		if (err) {
			callback(null);
		} else {
			callback(user);
		}
	};

	User.findOne({ username: username }, callback1);

};

//a method to update the status of a user. It takes a username, status
//and a callback as parameters and returns 
exports.updateUserStatus = async (username, status, callback) => {
	// const filter = {username: username};
	// const update = {status: status};

	User.findOne({ username: username }, (err, user) => {
		if (err) {
			callback(null);
		} else {
			user.status = status;
			user.save((err) => {
				if (err)
					callback(null);
				else
					callback(user);
			});
		}
	});
};


//a method to update the location of a user. It takes a username, location
//and a callback as parameters and returns 
exports.updateUserLocation = async (username, location, callback) => {

	User.findOne({ username: username }, (err, user) => {
		if (err) {
			callback(null);
		} else {
			user.location = location;
			user.save((err) => {
				if (err)
					callback(null);
				else
					callback(user);
			});
		}
	});
};

//a method to update the if a user is a rescuer. It takes a username, rescuer
//and a callback as parameters and returns 
exports.updateUserRescuer = async (username, rescuer, callback) => {

	User.findOne({ username: username }, (err, user) => {
		if (err) {
			callback(null);
		} else {
			user.rescuer = rescuer;
			user.save((err) => {
				if (err)
					callback(null);
				else
					callback(user);
			});
		}
	});
};