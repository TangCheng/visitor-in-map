$(function() {
    var socket = io();

    socket.on('ws.receive', function(data) {
        console.log(data);
       $('#result').html(JSON.stringify(data));
    });
});