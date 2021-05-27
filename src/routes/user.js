const express = require('express');
const router = express.Router();

const userController = require('../app/controller/UserController');


router.get('/', userController.index);
router.post('/create', userController.create);

router.get('/info', userController.info);
router.put('/info', userController.infoEdit);


module.exports = router;