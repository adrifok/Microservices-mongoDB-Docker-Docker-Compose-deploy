const Character = require("../data");
const {response} = require("../utils");

module.exports = async (req, res) => {
    try {
        const newCharacter = await Character.create()
        response(res, 201, newCharacter); 
    } catch (error) {
        
    }
};
