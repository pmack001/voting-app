const socket = io();

function vote(option) {
    socket.emit('vote', option);
}

socket.on('updateVotes', (votes) => {
    document.getElementById('countguilty').textContent = votes.Guilty;
    document.getElementById('countnotguilty').textContent = votes.NotGuilty;
});
