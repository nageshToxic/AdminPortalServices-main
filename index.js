const http = require('http');
const httpPort = process.env.PORT || 3013;
const app = require('./server/app');

var httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log("http server listing on port : " + httpPort)
});