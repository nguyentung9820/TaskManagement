const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');
const authMiddleware = require('../middlewares/middleware');



// router.use('/:slug', siteController.show);
router.get('/',authMiddleware.requireAuth, newsController.index);
router.put('/',authMiddleware.requireAuth, newsController.edit);
module.exports = router;