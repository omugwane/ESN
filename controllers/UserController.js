const User = require('../models/User');

exports.registerUser = function (req, res) {
    let user = new User();
    user.content = req.body.content;
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