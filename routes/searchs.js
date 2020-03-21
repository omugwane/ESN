const express = require('express');
const router = express.Router();

const searchController = require('../controllers/SearchController');

router.get('/', searchController.searchCitizenByUsername);

module.exports = router;