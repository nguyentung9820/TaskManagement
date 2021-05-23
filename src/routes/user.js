const express = require('express');
const router = express.Router();
const signinController = require('../app/controller/SigninController');

router.post('/', signinController.user);

module.exports = router;