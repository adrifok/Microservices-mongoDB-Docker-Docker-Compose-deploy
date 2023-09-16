const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms);

router.post("/", middlewares.filmsValidation, controllers.createFilms); //middleware and controller fn to create films

module.exports = router;