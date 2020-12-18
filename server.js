const http = require("http");
const app = require("./app");
// set on server, if not then default as 3000
const port = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(port);
