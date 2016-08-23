$(function() {
    var socket = io();

    socket.on('ws.receive', function(data) {

       $('#result').html(JSON.stringify(data));
        if(data.geo){
            $('#maparea').html('<div id="mapid" style="width: 600px; height: 400px"></div>')
            var mymap = L.map('mapid');
            
            mymap.setView([data.geo.lat, data.geo.lng], 12);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                id: 'mapbox.streets'
            }).addTo(mymap);

            L.marker([data.geo.lat, data.geo.lng]).addTo(mymap);
        }
    });
});