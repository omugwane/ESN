const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({

 	author: {
 		type: mongoose.Schema.Types.ObjectId,
 		ref: 'User',
 		required: false
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