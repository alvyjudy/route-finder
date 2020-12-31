import React, {useEffect, useRef} from "react";
import "leaflet/dist/leaflet.css";
import $l from "leaflet/dist/leaflet.js";

import $s from "./Map.scss";

const Map = (props) => {
  const locations = props.locations;
  const pickup = locations.pickup.current;
  const dest = locations.dest.current;
  const start = $l.latLng(...pickup);
  const end = $l.latLng(...dest);
  const bounds = $l.latLngBounds(start, end);

  const icon = $l.icon({
    iconUrl:"/assets/mapMarker.png",
    iconSize: [30, 30]
  })

  const ref = useRef();

  useEffect(()=>{
    const map = $l.map(ref.current).fitBounds(bounds, {padding: [50, 50]});
    $l.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    $l.marker(start, {icon}).addTo(map);
    $l.marker(end, {icon}).addTo(map);
  })

  return (
    <div className={props.className}>
      <div id="map" ref={ref} className={$s.MapContainer}/>
    </div>
  )
}

export default Map;

