const { Router } = require('express');
const { getTeams, putTeams, postTeams, deleteTeams } = require('../controllers/team.controller')
const fileUpload = require('../middleware/fileUpload');
const isAuth = require('../middleware/is-Auth');

const router = Router();



router.post('/teams/post', fileUpload,isAuth, postTeams);
router.put('/teams/put/:_id', fileUpload,isAuth, postTeams);
router.get('/teams/get', getTeams);
router.delete('/teams/delete/:_id', deleteTeams);


module.exports = router;