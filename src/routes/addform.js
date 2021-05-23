const express = require('express');
const router = express.Router();
const addformController = require('../app/controller/AddFormController');



// router.use('/:slug', siteController.show);
router.post('/', addformController.index);

module.exports = router;