const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);

router.post("/", middlewares.planetsValidation, controllers.createPlanets); //middleware and controller fn to create characters

module.exports = router;