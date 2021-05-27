const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');


router.get('/', siteController.home);

router.get('/aboutus', siteController.aboutus);


module.exports = router;