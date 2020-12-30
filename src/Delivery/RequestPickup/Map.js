import React, {useEffect, useRef} from "react";
import "leaflet/dist/leaflet.css";
import $l from "leaflet/dist/leaflet.js";

import $s from "./Map.scss";

const MapDisplay = (props) => {
  const coordinates = props.coordinates;
  if (!(coordinates && 
    coordinates.start && Array.isArray(coordinates.start) && coordinates.start.length === 2 && 
    coordinates.start && Array.isArray(coordinates.end) && coordinates.end.length === 2 
    )) {
    throw new Error("Invalid coordinate passed to <MapDisplay/> ", coordinate)
  }
  
  const start = $l.latLng(...coordinates.start);
  const end = $l.latLng(...coordinates.end);
  const bounds = $l.latLngBounds(start, end);

  const icon = $l.icon({
    iconUrl:"/assets/mapMarker.png",
    iconSize: [30, 30]
  })

  const ref = useRef();

  useEffect(()=>{
    const map = $l.map(ref.current).fitBounds(bounds, {padding: [50, 50]});
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(start, {icon}).addTo(map);
    L.marker(end, {icon}).addTo(map);
    

  })
  return (
    <div className={props.className}>
      <div id="map" ref={ref} className={$s.MapContainer}/>
    </div>
  )
}

export default MapDisplay;


// $l.marker(coordinates.start).addTo(map);
// $l.marker(coordinates.end).addTo(map);