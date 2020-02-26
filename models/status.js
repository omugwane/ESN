const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({

 	name: {
		type: String,
		required: true
 	},

 	colorCode: {
 		type: String,
 		required: true
 	},

    icon: {
 	    type: String,
        image: Buffer
    },

 	explanation: {
        type: String,
        required: false
 	}

 });

module.exports = mongoose.model("Status", chatSchema);