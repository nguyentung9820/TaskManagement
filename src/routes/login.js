const express = require('express');
const router = express.Router();
const signupController = require('../app/controller/SignUpController');
const loginController = require('../app/controller/LoginController');

router.post('/', signupController.signup);
router.get('/', loginController.index);

module.exports = router;