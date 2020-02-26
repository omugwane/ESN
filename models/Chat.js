const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({

 	author: {
		type: String,
		required: true
 	},

 	content: {
 		type: String,
 		required: true
 	},

    target: {
 	    type: String,
        required: false
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
		required: true
 	},
 });

module.exports = mongoose.model("Chat", chatSchema);