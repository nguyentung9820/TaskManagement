const express = require('express');
const router = express.Router();
const userController = require('../app/controller/UserController');



// router.use('/:slug', siteController.show);
router.post('/', userController.index);

module.exports = router;