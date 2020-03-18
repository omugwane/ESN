const mongoose = require('mongoose');

const announcementsSchema = mongoose.Schema({

 	sender: {
		type: String,
		required: true
 	},

 	content: {
 		type: String,
 		required: true
 	},
 	postedAt: {
 		type: Date, default: Date.now,
 	},
});

module.exports = mongoose.model('Announcement', announcementsSchema);