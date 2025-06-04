import express from "express";
import { WebSocketServer} from "ws"

const app = express();
const port = 4000;

const server = app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection" , (ws)=>{
    console.log("✅ Client connected");
    ws.on("message" , (data)=>{
        console.log("Client says: " + data.toString());
        ws.send("Hello from server");
    })
});

