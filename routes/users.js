const express = require('express');
const router = express.Router();

const userController = require("../controllers/UserController");

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.delete('/:userId', userController.deleteUser);
router.patch('/:userId', userController.updateUser);

module.exports = router;
