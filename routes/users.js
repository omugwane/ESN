const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.post('/', userController.registerUser);
router.post('/login', userController.login);
router.put('/status/:username', userController.updateUserStatus);
router.put('/username/:username', userController.updateUserUsername);
router.put('/password/:username', userController.updateUserPassword);
router.put('/role/:username', userController.updateUserRole);

module.exports = router;