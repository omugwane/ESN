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

 	postedAt: {
 		type: Date, default: Date.now,
 	}

 });

module.exports = mongoose.model("Chat", chatSchema);