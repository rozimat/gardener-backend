const { Router } = require('express');
const { getBanner, putBanner, postBanner, deleteBanner } = require('../controllers/banner.controller')
const fileUpload = require('../middleware/fileUpload');
const isAuth = require('../middleware/is-Auth');

const router = Router();



router.post('/banner/post',fileUpload, isAuth, postBanner);
router.put('/banner/put/:id',fileUpload, isAuth, putBanner);
router.get('/banner/get', getBanner);
router.delete('/banner/delete/:_id', deleteBanner);


module.exports = router;