const express = require('express');
const router = express.Router();

const userController = require("../controllers/UserController");

/* GET users listing. */
router.get('/', userController.getAllUsers);

module.exports = router;
