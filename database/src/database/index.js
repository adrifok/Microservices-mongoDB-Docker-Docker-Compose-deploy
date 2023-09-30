const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/envs");

console.log("MONGODB_URI:", MONGODB_URI);

const conn = mongoose.createConnection(MONGODB_URI);

console.log("Connected to MongoDB");


// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema"));
// const Planet = conn.model("Planet", require("./schemas/planetSchema"));


// Character.find()
// .populate("films", ["_id", "title"])
// .then((res) => console.log(res[0].films));

// Film.find()
// .then((res) =>console.log(res));

module.exports={
    Character:conn.model("Character", require("./schemas/characterSchema")),
    Film:conn.model("Film", require("./schemas/filmSchema")),
    Planet:conn.model("Planet", require("./schemas/planetSchema"))
}
