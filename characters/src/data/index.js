const characters = require("./characters.json");

module.exports = {
    list: async () => {
        return characters;
    },
    
    create: async()=>{
        throw Error("error in DB while creating character");
    },
};
