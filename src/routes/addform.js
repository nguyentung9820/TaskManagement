const express = require('express');
const router = express.Router();
const addformController = require('../app/controller/AddFormController');
const authMiddleware = require('../middlewares/middleware');



router.post('/',authMiddleware.requireAuth, addformController.index);

module.exports = router;