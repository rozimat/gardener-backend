const { Router } = require('express');
const { postProducts, putProduct, getProducts, deleteProduct } = require('../controllers/products.controller');
const isAuth = require('../middleware/is-Auth');
const fileUpload = require('../middleware/fileUpload');


const router = Router();

router.post('/products/post', isAuth , fileUpload, postProducts );
router.put('/products/put/:_id',isAuth, fileUpload, putProduct );
router.get('/products/get', getProducts);
router.delete('/products/delete/:_id', deleteProduct);


module.exports = router;