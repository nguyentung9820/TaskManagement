const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');



// router.use('/:slug', siteController.show);
router.get('/', newsController.index);

module.exports = router;