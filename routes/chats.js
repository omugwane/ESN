const express = require('express');
const router = express.Router();

const chatController = require("../controllers/ChatController");

/* GET chats listing. */
router.get('/', chatController.getAllChats);
router.post('/', chatController.saveChat);
router.get('/:chatId', chatController.getChatByID);
router.get('/:username', chatController.getChatsByUsername);
router.delete('/:chatId', chatController.deleteChat);
router.patch('/:chatId', chatController.updateChat);

module.exports = router;
