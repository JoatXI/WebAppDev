import 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = L.map ("map1");

const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

// Creates a title layer and adds it to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attrib } ).addTo(map);
            
map.setView([40.69,-74], 14);