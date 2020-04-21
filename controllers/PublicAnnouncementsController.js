const Chat = require('../models/PublicAnnouncements');
// // const chatBroadcaster = require('../bin/www')
// const App = require('../app');
const PublicAnnouncementsRepository = require('../repositories/PublicAnnouncementsRepository');
const userRepository = require('../repositories/UserRepository');
const BroadcastAPI = require('../lib/BroadcastAPI');
const ROLES = require('../lib/Role');

//a method to retrive all announcements from the database. it does not take
//any arguments. it call the chatRepository.getAllChats(callback) method
exports.getAllAnnouncements = function (req, res) {

    let callback = (docs) => {

        if (docs === null) {
            res.status(500).json({data: null});
        } else {
            let responseObject = {
                data: docs,
            };
            res.status(200).json(responseObject);
        }
    };
    PublicAnnouncementsRepository.getAllAnnouncements(callback);

};

//a method that retrives public announcements by content it takes a 
//response and request object as arguments and returns a jason object of the retrived
//chats. it call chatRepository.getChatsByUsername(filter,callback) method
exports.getAnnouncementsByContent = function (req, res) {
    let callback = (docs) => {
        if (docs === null) {
            res.status(500).json({data: null});
        } else {
            let responseObject = {
                data: docs,
            };
            res.status(200).json(responseObject);
        }
    };
    PublicAnnouncementsRepository.getAnnouncementsByContent(req.params.content, callback);
};

//method to save announcements to the database. it takes as arguments request and response 
//objects and returns a jason object. it calls chatRepository.saveChat method.
exports.saveAnnouncement = (req, res) => {
    userRepository.getUserByUsername(req.body.sender, (user) => {
        if (user) {
            //Checking if the user has privilege to post announcement
            if ((user.role === ROLES.COORDINATOR || user.role === ROLES.ADMINISTRATOR) && user.active) {
                let announcement = {
                    sender: user.username,
                    content: req.body.content,
                };

                PublicAnnouncementsRepository.postAnnouncement(announcement, (newAnnouncement) => {
                    if (newAnnouncement) {
                        BroadcastAPI.broadcastAnnouncementEventToAll(newAnnouncement);
                        res.status(200).json({message: 'success', data: newAnnouncement});
                    } else
                        res.status(500).json({message: 'Saving the announcement failed', data: null});
                });
            } else {
                // 401 Unauthorized
                res.status(401).json({
                    error: true,
                    message: 'Only active Coordinator and Administrator are allowed to post announcements.',
                    data: null
                });
            }
        } else {
            res.status(500).json({message: 'Saving the announcement failed', data: null});
        }
    });
};
