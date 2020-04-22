const User = require('../models/User');
const ROLES = require('../lib/Role');


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

    User.find({username: userData.username}, (err, users) => {
        if (users && users.length === 0) {
            // user.username =
            user.save((err) => {
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

    User.findOne({username: username}, callback1);

};

//check if admin user exists
exports.getUserByUserRole = (role, callback) => {
    let callback1 = (err, user) => {
        if (err) {
            callback(null);
        } else {
            callback(user);
        }
    };
    User.findOne({role: role}, callback1);
};

//Updating User Profile Information
exports.update = (username, data, callback) => {
    //Checking if the username is already taken
    userNameExists(username, data.username, (err, usernameTaken) => {
        if (!err && !usernameTaken) {
            //Fetching user to update
            User.findOne({username: username}, (err, user) => {
                if (!err) {
                    user.username = data.username;
                    user.role = data.role;
                    user.username = data.username;
                    user.active = data.active;
                    if (data.password) {
                        user.password = user.generateHash(data.password);
                    }
                    user.save((err) => {
                        callback(err, user);
                    });
                }
            });
        } else {
            if (err)
                callback(err, null);
            else
                callback({message: "Username " + data.username + " is already taken. Try another."}, null)
        }
    });
};

let userNameExists = (oldUsername, newUsername, callback) => {
    User.find({username: newUsername}, (err, users) => {
        let usernameTaken = true;
        if (users && users.length === 0) //It's a new username
            usernameTaken = false;
        else if (users && users[0].username === oldUsername) //It's the same username
            usernameTaken = false;

        callback(err, usernameTaken);
    })
};

exports.initializeDBWithADMIN = (callback) => {
    let admin = {
        username: 'ESNAdmin',
        password: 'admin',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: ROLES.ADMINISTRATOR,
        status: 'Undefined'
    };


    //Checking if at least one admin already exists
    User.find({role: ROLES.ADMINISTRATOR}, (err, users) => {
        //Adding an initial admin if none exists
        if (!err && users && users.length === 0) {
            exports.registerUser(admin, (user) => {
                callback(user);
            })
        }
    });
};

exports.getInactiveUsers = (callback) => {
    User.find({active: false}, (err, users) => {
        callback(err, users);
    })
};