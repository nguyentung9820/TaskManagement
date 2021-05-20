const express = require('express');
const router = express.Router();
const saveController = require('../app/controller/SaveController');


router.post('/', saveController.table);


module.exports = router;