const express = require('express');
const router = express.Router();
const homeController = require('../app/controller/HomeController');



// router.use('/:slug', siteController.show);
router.get('/', homeController.index);

module.exports = router;