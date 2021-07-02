const express = require('express');
const router = express.Router();

const userController = require('../app/controller/UserController');
const authMiddleware = require('../middlewares/middleware');
const editController = require('../app/controller/EditController');

router.get('/', userController.index);
router.post('/create', userController.create);
router.put('/', editController.deleteFormUser);

router.get('/info', userController.info);
router.put('/info', userController.infoEdit);

router.get('/team', authMiddleware.checkIdTeam,userController.team);
router.post('/team',authMiddleware.checkIdTeam ,userController.teamCreate);
router.put('/team', editController.deleteFormTeam);

router.get('/edit-table', editController.editForm)
router.post('/edit-table',editController.editForm)
router.put('/edit-table' , editController.tableEdit)

router.get('/search',authMiddleware.checkIdTeam, userController.search);

router.get('/edit-table-team',authMiddleware.checkIdTeam, editController.editFormTeam)
router.post('/edit-table-team',authMiddleware.checkIdTeam, editController.editFormTeam)
router.put('/edit-table-team',authMiddleware.checkIdTeam, editController.editTeamTable)

router.get('/main', userController.mainsite)

module.exports = router;