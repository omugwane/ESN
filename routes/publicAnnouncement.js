const express = require('express');
const router = express.Router();

const publicAnnouncementController = require('../controllers/PublicAnnouncementsController');

/* GET chats listing. */
router.get('/', publicAnnouncementController.getAllAnnouncements);
router.post('/', publicAnnouncementController.saveAnnouncement);
router.get('/:content', publicAnnouncementController.getAnnouncementsByContent);


module.exports = router;
