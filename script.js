const socket = io();

function vote(option) {
    socket.emit('vote', option);
}

socket.on('updateVotes', (votes) => {
    document.getElementById('countA').textContent = votes.optionA;
    document.getElementById('countB').textContent = votes.optionB;
});