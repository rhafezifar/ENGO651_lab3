document.addEventListener('DOMContentLoaded', function () {

    var map = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        // id: 'rayehe/ckm5y6w57ddg317o1xnekzwf3',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicmF5ZWhlIiwiYSI6ImNrbHZ5NHMyejBkdXcyc214OHlvNmhrZG0ifQ.KXVOh3T-0PdiPnVQ5iMCCQ'
    });
    
    var incidets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'rayehe/ckm60kmu311wz17s5cc6v5oge',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicmF5ZWhlIiwiYSI6ImNrbHZ5NHMyejBkdXcyc214OHlvNmhrZG0ifQ.KXVOh3T-0PdiPnVQ5iMCCQ'
    });

    var mymap = L.map('mapid', {layers: [map, incidets]}).setView([51.0447, -114.0719], 13);

    var baseMaps = {
        "Map": map
    };

    var overlayMaps = {
        "Incidets": incidets
    };

    L.control.layers(baseMaps, overlayMaps).addTo(mymap);

});