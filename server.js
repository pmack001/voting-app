const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let votes = { optionA: 0, optionB: 0 };

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('updateVotes', votes);

    socket.on('vote', (option) => {
        if (votes[option] !== undefined) {
            votes[option]++;
            io.emit('updateVotes', votes);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});