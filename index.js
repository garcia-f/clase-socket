import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import express from 'express';

const app = express();
const server = createServer(app);

app.use(cors());

const io = new Server(server, {
    cors: {
        origin:'*',
    }
})

io.on('connection', (socket) => {
    socket.on('evento', async(data) => {
        io.emit('evento', data)        
    })
})

server.listen(4000, () => {
    console.log('Server running on port 4000');
})