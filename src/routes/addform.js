const express = require('express');
const router = express.Router();
const addformController = require('../app/controller/AddFormController');



router.post('/', addformController.index);
module.exports = router;