module.exports = (fn) => {
    return function(req, res, next){
        fn(req, res).catch((err) =>{
            next(err);  //next de error indica q el req continua hacia el manejador de errores
        })
    };
};

//version simplificada    module.exports = (fn) => (req, res, next) => fn().catch((err) =>next(err)); 