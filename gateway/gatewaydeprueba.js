// const express = require("express");
// const morgan = require("morgan");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();
// const gatewayPort = 8000;

// app.use(morgan("dev"));

// // Define routes for each microservice
// const microservices = [
//   { path: "/characters", target: "http://localhost:8001" },
//   { path: "/films", target: "http://localhost:8002" },
//   { path: "/planets", target: "http://localhost:8003" },
// ];

// // Configure proxy middleware for each microservice
// microservices.forEach((service) => {
//   app.use(service.path, createProxyMiddleware({ target: service.target, changeOrigin: true }));
// });

// app.listen(gatewayPort, () => {
//   console.log(`Gateway listening on port ${gatewayPort}`);
// });
