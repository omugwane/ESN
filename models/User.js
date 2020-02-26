const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
/*
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    role: String,
    status: String
});*/
const chatSchema = mongoose.Schema({

    username: {
       type: String,
       required: true
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
       required: false
   },
   lastName: {
       type: String,
      required: false
     },
    email: {
       type: String,
       required: true
    },
    phone: {
        type: String,
        required: true
     },
    role: {
        type: String,
        required: true
     },
     status: {
        type: String,
        required: true
     },
     timeStamp: {
        type: Date, default: Date.now,
    },
});


// Generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);