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

exports.deleteUser = async (req, res)=> {
    User.deleteOne({_id:req.params.userId}, (err, result) => {
        if (err) {
            res.status(500).json({message:err});
        } else {
            res.status(200).json({ message: "User deleted successfully" });
        }
    });
};

exports.updateUser = async (req, res)=> {
    try{
        const updatedUser = await User.updateOne(
            {_id:req.params.userId},
            {$set:{username:req.body.username}}
        );
        res.status(200).json({message:"User updated"});
    }catch(err){
        res.status(500).json({message:err});
    }
};

