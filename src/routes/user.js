const express = require('express');
const router = express.Router();

const userController = require('../app/controller/UserController');
const authMiddleware = require('../middlewares/middleware');


router.get('/', userController.index);
router.post('/create', userController.create);

router.get('/info', userController.info);
router.put('/info', userController.infoEdit);

router.get('/team', authMiddleware.checkIdTeam,userController.team);
router.post('/team',authMiddleware.checkIdTeam ,userController.teamCreate);
router.post('/edit-table',userController.edit)
router.put('/edit-table' , userController.tableEdit)
module.exports = router;