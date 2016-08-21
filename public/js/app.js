$(function() {
    var socket = io();

    socket.on('ws.receive', function(data) {

       $('#result').html(JSON.stringify(data));

        if(data.geo){
            var mymap = L.map('mapid').setView([data.geo.lat, data.geo.lng], 13);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                id: 'mapbox.streets'
            }).addTo(mymap);

            L.marker([51.5, -0.09]).addTo(mymap);
        }
    });
});