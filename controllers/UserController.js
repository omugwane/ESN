exports.registerUser = function (req, res) {

}

exports.getAllUsers = function (req, res) {

}

exports.deleteUser = async (req, res)=> {
    try{
        const deletedUser = User.remove({_id:req.params.userId});
        res.status(200).res({ message: "User deleted successfully" });
    }catch(err){
        res.status(500).json({message:err});
    }
};

exports.updateUser = async (req, res)=> {
    try{
        const updatedUser = await User.updateOne(
            {_id:req.params.userId},
            {$set:{username:req.body.username}}
        );
        res.status(200).res({message:"User updated"});
    }catch(err){
        res.status(500).json({message:err});
    }
};

