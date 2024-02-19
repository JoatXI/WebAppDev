import 'leaflet';
import 'leaflet/dist/leaflet.css';

// import the marker icon from the Leaflet NPM package
import markerIcon from "leaflet/dist/images/marker-icon.png";

const map = L.map ("map1");

const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

// Creates a title layer and adds it to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attrib } ).addTo(map);
            
map.setView([6.459765, 3.324513], 13);

// Specify he default marker image to be our imported marker
L.Marker.prototype.setIcon(L.icon({
    iconUrl:markerIcon
}));

// Adds a marker to the map
L.marker([6.459765, 3.324513]).addTo(map);

map.on('click', clickEvent => {
    // clickEvent.latlng gives us the clicked location in the map as a LatLng object
    // We can obtain the latitude with clickEvent.latlng.lat and the longitude with clickEvent.latlng.lng
    //alert(`You clicked at ${clickEvent.latlng.lat}, ${clickEvent.latlng.lng}`);
    L.marker([clickEvent.latlng.lat, clickEvent.latlng.lng]).addTo(map);
});
