const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.post('/', userController.registerUser);
router.post('/login', userController.login);
router.put('/status/:username', userController.updateUserStatus);

module.exports = router;