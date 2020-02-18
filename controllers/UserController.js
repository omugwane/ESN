let User = require('../models/User');

exports.registerUser = function (req, res) {

}

exports.getAllUsers = function (req, res) {

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

