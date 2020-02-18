const express = require('express');
const router = express.Router();

const userController = require("../controllers/UserController");

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.delete('/:userId', userController.deleteUser);
router.put('/:userId', userController.updateUser);

module.exports = router;
