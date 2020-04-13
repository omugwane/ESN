require('dotenv').config();
const Roles = require('../lib/Role');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/UserRepository');

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
		location: req.body.location,
		rescuer: req.body.rescuer
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

exports.updateUserLocation = async (req, res) => {

	await userRepository.updateUserLocation(req.params.username, req.body.location, function (user) {
		if (user) {
			res.status(200).json({message: 'Successfully update the user\'s location', data: user});
		}
		else {
			res.status(500).json({
				message: 'Updating the user\'s location failed.',
				data: null
			});
		}
	});
};


exports.updateUserRescuer = async (req, res) => {

	await userRepository.updateUserRescuer(req.params.username, req.body.rescuer, function (user) {
		if (user) {
			res.status(200).json({message: 'Successfully update the user\'s rescuing status', data: user});
		}
		else {
			res.status(500).json({
				message: 'Updating the user\'s rescuing status failed.',
				data: null
			});
		}
	});
};



