const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({

 	sender: {
		type: String,
		required: true
 	},

 	content: {
 		type: String,
 		required: true
 	},
	status: {
		type: String,
	   required: false
  	},
 	postedAt: {
 		type: Date, default: Date.now,
 	},
	receiver: {
		type: String,
		default: null
		// required: true
 	},
 });

module.exports = mongoose.model("Chat", chatSchema);