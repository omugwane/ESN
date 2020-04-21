require('dotenv').config();
const Roles = require('../lib/Role');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/UserRepository');
//const BroadcastAPI = require('../lib/BroadcastAPI');

// Register User
exports.registerUser = function (req, res) {
	let user = {
		username: req.body.username,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		phone: req.body.phone,
		role: Roles.CITIZEN,
		status: req.body.status,
		active: req.body.active
	};

	userRepository.registerUser(user, (savedUser) => {
		if (savedUser)
			res.status(200).json({'message': 'success', data: savedUser});
		else
			res.status(500).json({
				'message': 'Registration failed! It might be that the username is already taken.',
				data: null
			});
	});
};

// Login
exports.login = async (req, res) => {
	userRepository.getUserByUsername(req.body.username, (user) => {
		if (user === null) {
			res.status(401).json({status: 'error', message: 'Username not registered!', data: null});
		} else {
			if (user.validPassword(req.body.password)) {
				const token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: '1h'});
				res.status(200).json({status: 'success', message: 'user found!!!', data: {user: user, token: token}});
			} else {
				res.status(401).json({status: 'error', message: 'Invalid password!!!', data: null});
			}
		}
	});

};

// Get all users
exports.getAllUsers = function (req, res) {

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
	userRepository.getAllUsers(callback);
};

//check if admin user exits
exports.login = async (req, res) => {
	userRepository.getUserByUserRole('admin', (user) => {
		if (user === null) {
			res.status(401).json({status: 'error', message: 'Username admin not found', data: null});
		} else {
			res.status(200).json({status: 'success', message: 'user admin found!!!', data: {user: user}});
		}
	});
};

//Register Default admin
exports.registerUser = function (req, res) {
	let user = {
		username: 'ESNAdmin',
		password: 'admin',
		firstName: '',
		lastName: '',
		email: '',
		//phone: req.body.phone,
		role:'admin',
		status: 'OK'
	};
	userRepository.registerUser(user, (savedUser) => {
		if (savedUser)
			res.status(200).json({'message':'success', data: savedUser});
		else
			res.status(500).json({
				'message': 'Registration failed! It might be that the username is already taken.',
				data: null
			});
	});
};


exports.updateUserStatus = async (req, res) => {

	await userRepository.updateUserStatus(req.params.username, req.body.status, function (user) {
		if (user) {
			res.status(200).json({message: 'success', data: user});
		}
		else {
			res.status(500).json({
				message: 'Updating user status failed. It might be that the username is incorrect',
				data: null
			});
		}
	});
};

// Updating user's username
exports.updateUserUsername = async (req, res) => {

	await userRepository.updateUserUsername(req.params.username, req.body.username, function (user) {
		if (user) {
			if ((user.role === Roles.ADMINISTRATOR) && user.active) {
				BroadcastAPI.broadcastUserEventToAll(user);
				res.status(200).json({message: 'success', data: user});
			}
			else{
				// 401 Unauthorized
                res.status(401).json({
                    error: true,
                    message: 'Only active administrators are allowed to modify user\'s usernames',
                    data: null
                });
			}
		}
		else {
			res.status(500).json({
				message: 'Updating user status failed. It might be that the username is incorrect',
				data: null
			});
		}
	});
};

// Updating the user's password
exports.updateUserPassword = async (req, res) => {

	await userRepository.updateUserPassword(req.params.username, req.body.password, function (user) {
		if (user) {
			if ((user.role === Roles.ADMINISTRATOR) && user.active) {
				BroadcastAPI.broadcastUserEventToAll(user);
				res.status(200).json({message: 'success', data: user});
			}
			else{
				// 401 Unauthorized
                res.status(401).json({
                    error: true,
                    message: 'Only active administrators are allowed to modify user\'s password',
                    data: null
                });
			}
		}
		else {
			res.status(500).json({
				message: 'Updating user status failed. It might be that the username is incorrect',
				data: null
			});
		}
	});
};

// Updating the user's role or privilege level
exports.updateUserRole = async (req, res) => {

	await userRepository.updateUserRole(req.params.username, req.body.role, function (user) {
		if (user) {
			if ((user.role === Roles.ADMINISTRATOR) && user.active) {
				BroadcastAPI.broadcastUserEventToAll(user);
				res.status(200).json({message: 'success', data: user});
			}
			else{
				// 401 Unauthorized
                res.status(401).json({
                    error: true,
                    message: 'Only active administrators are allowed to modify user\'s privilege level',
                    data: null
                });
			}
		}
		else {
			res.status(500).json({
				message: 'Updating user status failed. It might be that the username is incorrect',
				data: null
			});
		}
	});
};





