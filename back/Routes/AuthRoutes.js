const { register, login, me } = require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddlewares");

const router = require("express").Router();
router.post("/", checkUser, me);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
