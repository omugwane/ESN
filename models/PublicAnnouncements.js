const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({

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
announcementSchema.index({content: 'text'}); //To create an index to support text search

module.exports = mongoose.model('Announcement', announcementSchema);