const {Router} = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", controllers.getCharacters);

router.post("/", controllers.createCharacter); //controller fn to create characters



module.exports = router;