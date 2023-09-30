const server = require("./src/server");

const {Character, Film, Planet} = require("./src/database");

//Film.list().then((res) => console.log(res));
// Character.get().then((res) => console.log(res));
// Character.insert({
//     _id:"202",
//     name: "adriana",
//     birth_year: "1964",
//     gender:123456
// }).then((res) => console.log(res));


const PORT = 8004;
server.listen(PORT,()=>{
    console.log(`Database service listening on port ${PORT}`);
});
