const Chat = require('../models/Chat');
const User = require('../models/User');
const PublicAnnouncement = require('../models/PublicAnnouncements');

exports.execute = async (criteria, callback) => {
    if (criteria.context === 'citizens') {
        User.find(criteria.getFilter(), (err, arr) => {
            if (err)
                callback(null);
            else
                callback(arr);
        });
    } else if (criteria.context === 'announcements') {
        PublicAnnouncement.find(criteria.getFilter(), (err, arr) => {
            if (err)
                callback(null);
            else
                callback(arr);
        });
    } else if (criteria.context === 'public_chats' || criteria.context === 'private_chats') {
        Chat.find(criteria.getFilter(), (err, arr) => {
            if (err)
                callback(null);
            else
                callback(arr);
        });
    }
};