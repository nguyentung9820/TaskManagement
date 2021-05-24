const express = require('express');
const router = express.Router();
const homeController = require('../app/controller/HomeController');



router.get('/', homeController.about);

module.exports = router;