import 'leaflet';

const map = L.map ("map1");

const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

// Creates a title layer and adds it to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attrib } ).addTo(map);
            
const loc = [6.459765, 3.324513];
map.setView(loc, 13);

// Adds a marker to the map
const marker = L.marker(loc).addTo(map);

map.on('click', clickEvent => {
    // clickEvent.latlng gives us the clicked location in the map as a LatLng object
    // We can obtain the latitude with clickEvent.latlng.lat and the longitude with clickEvent.latlng.lng
    //alert(`You clicked at ${clickEvent.latlng.lat}, ${clickEvent.latlng.lng}`);
    const marker = L.marker([clickEvent.latlng.lat, clickEvent.latlng.lng]).addTo(map);

    const text = prompt("Please enter a message: ");

    marker.bindPopup(text);
});