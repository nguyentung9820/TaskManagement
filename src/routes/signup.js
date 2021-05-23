const express = require('express');
const router = express.Router();
const signupController = require('../app/controller/SignUpController');

router.post('/', signupController.signup);

module.exports = router;