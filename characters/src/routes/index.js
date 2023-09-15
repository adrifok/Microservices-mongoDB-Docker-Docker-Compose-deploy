const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);

router.post("/", middlewares.characterValidation, controllers.createCharacter); //middleware and controller fn to create characters

module.exports = router;