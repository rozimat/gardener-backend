const { Router } = require('express');
const { getQuote, putQuote, postQuote, deleteQuote } = require('../controllers/quote.controller');


const router = Router();

router.post('/quote/post', postQuote);
router.put('/quote/put/:_id', putQuote);
router.get('/quote/get', getQuote);
router.delete('/quote/delete/:_id', deleteQuote);


module.exports = router;