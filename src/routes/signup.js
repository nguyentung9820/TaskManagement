const express = require('express');
const router = express.Router();
const signupController = require('../app/controller/SignUpController');

router.get('/', signupController.index);

router.post('/', signupController.signupPost);



module.exports = router;