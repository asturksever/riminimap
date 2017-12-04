var map=L.map('mapid').setView([44.060, 12.567], 15);
var osm=L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', subdomains: ['a', 'b', 'c']
}

).addTo( map);
var osm_cycle=L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}

);
var osm_outdoors=L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}

);
var Mapbox=L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery  <a href="http://mapbox.com">Mapbox</a>', maxZoom: 15, id: 'mapbox.streets', accessToken: 'pk.eyJ1IjoiYXN0dXJrc2V2ZXIiLCJhIjoiY2ozZWd4djFwMDAwMzMybXI5NW9maGR5ZyJ9.mHJS1uB6SESwQW3cBlcnKw'
}

).addTo(map);
var baseLayers= {
    "<img src='assets/images/mapbox.png'/>Mapbox": Mapbox, "<img src='assets/images/osm.png'/>OpenStreetMap Cycle": osm_cycle, "<img src='assets/images/osm.png'/>OpenStreetMap Outdoor": osm_outdoors
}

;
var overlayMaps= {
    "<img src='assets/images/osm.png'/>OpenStreetMap": osm,
}

;

L.control.layers(baseLayers, overlayMaps).addTo(map);
var popup=L.popup();
function onMapClick(e) {
    popup .setLatLng(e.latlng) .setContent("You clicked the map at " + e.latlng.toString()) .openOn(map);
}



var map = L.map('mapid').setView([0, 0], 2);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.Control.geocoder().addTo(map);