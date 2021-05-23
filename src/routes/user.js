const express = require('express');
const router = express.Router();
const signinController = require('../app/controller/SigninController');
const authMiddleware = require('../middlewares/middleware');

router.post('/',authMiddleware.requireAuth, signinController.user);

module.exports = router;