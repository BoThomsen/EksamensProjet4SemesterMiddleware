"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const Api_1 = require("../2_sessions/Api");
const WebSocket = __importStar(require("ws"));
const WebSocketServer = (0, express_1.default)();
// makes a http WebSockertServer
const server = http.createServer(WebSocketServer);
exports.server = server;
const wss = new WebSocket.Server({ server });
// connection ready
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // getting error without declaring the message in another
        // variable to let the program know it is a string
        // splitting the in humidity, temp and moisture
        const formattedString = "" + message;
        const splitData = formattedString.split(':', 3);
        // showing the data received
        console.log(formattedString);
        // getting number via split string and moisture with substring
        const moist = formattedString.substring(0, 3);
        const humi = parseFloat(splitData[1]);
        const temp = parseFloat(splitData[2]);
        console.log(moist + " - " + humi + " - " + temp);
        // sending data to database
        Api_1.Api.DataToDatabase("1", humi, temp, moist, new Date());
        ws.send(`Message sent -> ${message}`);
    });
    // send a feedback to WebSocketClient
    ws.send('Hi there you send some data to the WebSocket server');
});
//# sourceMappingURL=WebSocketServer.js.map