import express from 'express';
import * as http from 'http';
import { Api } from '../2_sessions/Api';
import * as WebSocket from 'ws';


const WebSocketServer = express();

// makes a http WebSockertServer
const server = http.createServer(WebSocketServer);

const wss = new WebSocket.Server({ server });

// connection ready
wss.on('connection', (ws: WebSocket) => {



    ws.on('message', (message: string) => {
        // getting error without declaring the message in another
        // variable to let the program know it is a string
        // splitting the in humidity, temp and moisture
        const formattedString = "" + message;
         const splitData = formattedString.split(':', 3)

        // showing the data received
        console.log(formattedString);



        // getting number via split string and moisture with substring
        const moist = formattedString.substring(0,3);
        const humi = parseFloat(splitData[1]);
        const temp = parseFloat(splitData[2]);

        console.log(moist + " - " + humi + " - " + temp)



        // sending data to database

        Api.DataToDatabase("1",humi,temp,moist, new Date());





        ws.send(`Message sent -> ${message}`);

    });

    // send a feedback to WebSocketClient
    ws.send('Hi there you send some data to the WebSocket server');
});

export {server}