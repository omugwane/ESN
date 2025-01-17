const express = require('express');
const router = express.Router();

const chatController = require('../controllers/ChatController');

/* GET chats listing. */
router.get('/', chatController.getAllChats);
router.post('/', chatController.saveChat);
router.get('/:username', chatController.getChatsByUsername);
router.get('/:username1/:username2', chatController.getPrivateChats);
router.post("/upload",chatController.saveUpload);

module.exports = router;
