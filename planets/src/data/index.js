
const axios = require("axios");
const planets = require("./planets.json");

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/Planets")
        return results.data;
    },
    create: async()=>{
        throw Error("error in DB while creating planets");
    },
};

