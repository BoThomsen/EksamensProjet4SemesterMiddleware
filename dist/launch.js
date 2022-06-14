"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./0_routes/routes");
const WebSocketServer_1 = require("./0_routes/WebSocketServer");
const port1 = 3000;
const port2 = 3001;
// Starting WebServer/middleware
const WebServer = routes_1.routes.listen(port1, () => {
    console.log('This server is listening at port:' + port1);
});
// Starting WebsockertServer
const WebSockertServer = WebSocketServer_1.server.listen(port2, () => {
    console.log('WebSocketServer is listening at port:' + port2);
});
//# sourceMappingURL=launch.js.map