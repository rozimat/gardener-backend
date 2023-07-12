const { Router } = require('express');
const { login, register } = require('../controllers/auth.controller');
const isAuth = require('../middleware/is-Auth');



const router = Router();

router.post('/auth/login',isAuth,  login);
router.post('/auth/register',isAuth,  register);

module.exports = router;