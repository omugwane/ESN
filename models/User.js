const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
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
		required: false
	},
	phone: {
		type: String,
		required: false
	},
	role: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: 'Undefined'
	},
	location: {
		type: String,
		default: 'Unknown'
	},
	rescuer: {
		type: String,
		default: 'No'
	},
	timeStamp: {
		type: Date, default: Date.now,
	},
});


// Generating a hash
userSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// Checking if password is valid
userSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);