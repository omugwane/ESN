const express = require('express');
const router = express.Router();

const chatController = require('../controllers/PublicAnnouncementsController');

/* GET chats listing. */
router.get('/', chatController.getAllAnnouncements);
router.post('/', chatController.saveAnnouncement);
router.get('/:content', chatController.getAnnouncementsByContent);


module.exports = router;
