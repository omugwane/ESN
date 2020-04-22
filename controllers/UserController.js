require('dotenv').config();
const Roles = require('../lib/Role');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/UserRepository');
const BroadcastAPI = require('../lib/BroadcastAPI');

// Register User
exports.registerUser = function (req, res) {

    // req.parameters.username //old username

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
    //Initializing the system with an ADMINISTRATOR if none exists
    initializeDB();

    userRepository.getUserByUsername(req.body.username, (user) => {
        if (user === null) {
            res.status(401).json({status: 'error', message: 'Username not registered!', data: null});
        }
        if (!user.active) {
            res.status(401).json({
                error: true,
                message: 'Sorry! Your account is inactive. Contact an administrator to re-activate your account for you to login',
                data: null
            });
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

exports.getUser = function (req, res) {
    userRepository.getUserByUsername(req.params.username, (user) => {
        if (user) {
            res.status(200).json({
                error: false,
                message: 'User data successfully retrieved!',
                data: user
            });
        } else {
            res.status(500).json({error: true, message: "Either user not found or an error occurred", data: null});
        }
    });
};

exports.updateUser = (req, res) => {
    let oldUsername = req.params.username;
    let data = {
        username: req.body.username,
        password: req.body.password,
        verifyPassword: req.body.verifyPassword,
        role: req.body.role,
        active: !!req.body.active
    };

    userRepository.update(oldUsername, data, (err, user) => {
        if (!err && user) {
            // Broadcasting updated profile info to all socket-io connected clients
            BroadcastAPI.broadcastProfileUpdateEventToAll(user);

            res.status(200).json({
                error: false,
                message: 'User profile was successfully updated!',
                data: user
            });
        } else if (err.message)
            res.status(500).json({error: true, message: err.message, data: user});
        else
            res.status(500).json({error: true, message: err, data: user});
    });
};


//Register Default admin
let initializeDB = function () {
    userRepository.initializeDBWithADMIN((user) => {
        console.log("Saving initial admin::", user);
    });
};


