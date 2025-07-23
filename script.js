const socket = io();

function vote(option) {
    socket.emit('vote', option);
}

socket.on('updateVotes', (votes) => {
    document.getElementById('countA').textContent = votes.Guilty;
    document.getElementById('countB').textContent = votes.NotGuilty;
});
