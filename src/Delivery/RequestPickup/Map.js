import React, {useEffect, useRef} from "react";
import "leaflet/dist/leaflet.css";
import $l from "leaflet/dist/leaflet.js";
import {useSelector} from "react-redux";

import $s from "./Map.scss";
import getCoordinates from "./getCoordinates";
import getRoute from "./getRoute";


const Map = (props) => {
  const {pickup, dest} = useSelector(store=>store);
  const icon = $l.icon({
    iconUrl:"/assets/mapMarker.png",
    iconSize: [30, 30]
  })

  const mapNode = useRef();
  const mapObj = useRef();
  
  useEffect(()=>{
    mapObj.current = $l.map(mapNode.current);
    return ()=>{mapObj.current.remove()}
  })

  useEffect(()=>{
    const map = mapObj.current;
    if (pickup && dest) {
      Promise.all([
        getCoordinates(pickup),
        getCoordinates(dest),
        getRoute(pickup, dest)
      ]).then(res=>{
        const pickupCoord = res[0];
        const destCoord=res[1];
        const start = $l.latLng(...pickupCoord);
        const end = $l.latLng(...destCoord);
        const bounds = $l.latLngBounds(start, end);
        map.fitBounds(bounds, {padding: [50, 50]});
        $l.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
          attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        $l.marker(start, {icon}).addTo(map);
        $l.marker(end, {icon}).addTo(map);
      })
    }
  })

  return (
    <div className={props.className}>
      <div id="map" ref={mapNode} className={$s.MapContainer}/>
    </div>
  )
}


export default Map;

