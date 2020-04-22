const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.get('/:username', userController.getUser);
router.post('/', userController.registerUser);
router.post('/login', userController.login);
router.put('/:username', userController.updateUser);

module.exports = router;