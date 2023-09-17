const server = require("./src/routes/server");

const {Character} = require("./src/database");

Character.find()
.then((res) => console.log(res));


const PORT = 8004;
server.listen(PORT,()=>{
    console.log(`Database service listening on port ${PORT}`);
});

