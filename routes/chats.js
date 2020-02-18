const express = require('express');
const router = express.Router();

const chatController = require("../controllers/ChatController");

/* GET chats listing. */
router.get('/', chatController.getAllChats);
router.post('/', chatController.saveChat);
router.get('/:chat_id', chatController.getChatByID);
router.get('/:username', chatController.getChatsByUsername);

module.exports = router;
