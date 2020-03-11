require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
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
		status: req.body.status
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

			res.status(500).json({data: Null});
		} else {
			let responseObject = {
				data: docs,
			};
			res.status(200).json(responseObject);
		}
	};
	userRepository.getAllUsers(callback);
};

/*exports.deleteUser = async (req, res) => {
    User.deleteOne({ _id: req.params.userId }, (err, result) => {
        if (err) {
            res.status(500).json({ message: err });
        } else {
            res.status(200).json({ message: "User deleted successfully" });
        }
    });
};*/

exports.updateUser = async (req, res) => {
	try {
		const updatedUser = await User.updateOne(
			{_id: req.params.userId},
			{$set: {username: req.body.username, status: req.body.status}}
		);
		res.status(200).json({message: 'User updated'});
	} catch (err) {
		res.status(500).json({message: err});
	}
};

exports.updateUserStatus = async (req, res) => {
	await userRepository.updateUserStatus(req.params.username, req.body.status, function (user) {
		if (user) {
			res.status(200).json({message: 'success', data: user});
		} else {
			res.status(500).json({
				message: 'Updating user status failed. It might be that the username is incorrect',
				data: null
			});
		}
	});
};



