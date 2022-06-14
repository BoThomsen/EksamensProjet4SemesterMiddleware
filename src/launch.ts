
import {routes} from './0_routes/routes'
import { server } from './0_routes/WebSocketServer';

const port1 = 3000;
const port2 = 3001;


// Starting WebServer/middleware
const WebServer = routes.listen(port1, () =>{
    console.log('This server is listening at port:' + port1);
} );


// Starting WebsockertServer
const WebSockertServer = server.listen(port2, () =>{
    console.log('WebSocketServer is listening at port:' + port2);
} );




