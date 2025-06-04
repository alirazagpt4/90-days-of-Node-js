import { log } from "console";
import express from "express";
import {createServer} from "http";
import {Server} from "socket.io"
// import cors from "cors";


const app = express();
const port = 4000;


const server = createServer(app);

const io = new Server(server , {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


app.get("/" , (req, res)=>{
     res.send("welcome to socket io")
})

io.on("connection" , (socket)=>{
    console.log("Client Connected " , socket.id);
    socket.on("message" , (data)=>{
        console.log("Client says: " + data);
        socket.emit("message" , "Hello from server");
    })
})

server.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
