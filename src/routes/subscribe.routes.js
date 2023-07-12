const { Router } = require('express');
const { postSubscribe, getSubscribe, deleteSubscribe } = require('../controllers/subscribe.controller')


const router = Router();

router.post('/subscribe/post', postSubscribe);
router.get('/subscribe/get', getSubscribe);
router.delete('/subscribe/delete/:email', deleteSubscribe);


module.exports = router;