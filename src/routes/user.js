const express = require('express');
const router = express.Router();
const signinController = require('../app/controller/SigninController');
const authMiddleware = require('../middlewares/middleware');

router.post('/', signinController.user);
router.get('/',authMiddleware.requireAuth, signinController.index);

module.exports = router;