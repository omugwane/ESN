const express = require('express');
const router = express.Router();

const userController = require("../controllers/UserController");

/* GET users listing. */
router.get('/', userController.getAllUsers);
<<<<<<< HEAD
router.delete('/:userId', userController.deleteUser);
router.put('/:userId', userController.updateUser);
=======
router.post('/', userController.registerUser);
>>>>>>> 6b87725d486e4214667128d3b642bb4ef0435343

module.exports = router;