const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');

exports.registerUser = function (req, res) {
    let user = new User();

    user.username = req.body.username;
    user.password = bcrypt.hashSync(req.body.password);
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.email=req.body.email;
    user.phone=req.body.phone;
    user.role=req.body.role;

    

    user.save((err) => {
        if (err) {
            
            res.status(500).json(err);
        } else {
           res.status(200).json({ "message" : "success", data: []})
        }
    });
}

exports.getAllUsers = function (req, res) {

    User.find({}, (err, docs) => {

        if (err) {
            res.status(500).json({ data: Null });
        } else {
            let responseObject = {
                data: docs,
            }
            res.status(200).json(responseObject);
        }

    });
}

exports.deleteUser = function (req, res) {

}

exports.updateUser = function (req, res) {

}