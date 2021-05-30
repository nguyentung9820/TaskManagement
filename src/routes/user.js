const express = require('express');
const router = express.Router();

const userController = require('../app/controller/UserController');
const authMiddleware = require('../middlewares/middleware');
const editController = require('../app/controller/EditController');

router.get('/', userController.index);
router.post('/create', userController.create);

router.get('/info', userController.info);
router.put('/info', userController.infoEdit);

router.get('/team', authMiddleware.checkIdTeam,userController.team);
router.post('/team',authMiddleware.checkIdTeam ,userController.teamCreate);

router.post('/edit-table',editController.editForm)
router.put('/edit-table' , editController.tableEdit)

router.post('/edit-table-team', editController.editFormTeam)
router.put('/edit-table-team', editController.editTeamTable)
module.exports = router;