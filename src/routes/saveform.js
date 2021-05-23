const express = require('express');
const router = express.Router();
const saveController = require('../app/controller/SaveController');
const authMiddleware = require('../middlewares/middleware');



router.post('/',authMiddleware.requireAuth, saveController.table);


module.exports = router;