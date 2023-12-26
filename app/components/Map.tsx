'use client';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';


//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

interface MapProps {
    center?: number[]
}


const Map: React.FC<MapProps> = ({
    center

}) => {
    return ( 
    
    <MapContainer center={center as L.LatLngExpression || [51.505, -0.09]}
    zoom={center ? 4 : 2}
    scrollWheelZoom={false}
    className='h-[35vh] rounded-lg'

    >
         <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {center && (
        <Marker position={center as L.LatLngExpression} />
    
    )}

            </MapContainer>
     );
}
 
export default Map;