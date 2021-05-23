const express = require('express');
const router = express.Router();
const logoutController = require('../app/controller/LogoutController');

router.get('/', logoutController.index);

module.exports = router;