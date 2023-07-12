const {Router} = require("express");
const { viewCounter } = require("../controllers/views.controller");

const router = Router();

router.get("/api/posts/:id", viewCounter);

module.exports = router