const express = require("express");
const server = express();
const {PORT} = require("./config");
const {HomeRoutes, QuotesRoutes} = require("./routes");
const {NotFoundMiddleware} = require("./middlewares");

// Middleware set up:
server.use(express.static("./public"));
server.use(express.json()); 

// Routes:
server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
