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

  const ref = useRef();

  useEffect(()=>{
    if (!(pickup && dest)) {
      return
    }
    console.log("effect run");
    Promise.all([
      getCoordinates(pickup),
      getCoordinates(dest),
      getRoute(pickup, dest)
    ]).then(res=>{
      console.log('result from promises', res)
      const pickupCoord = res[0];
      const destCoord=res[1];
      const route=res[2];
      const start = $l.latLng(...pickupCoord);
      const end = $l.latLng(...destCoord);
      const bounds = $l.latLngBounds(start, end);
      const map = $l.map(ref.current).fitBounds(bounds, {padding: [50, 50]});
      $l.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      $l.marker(start, {icon}).addTo(map);
      $l.marker(end, {icon}).addTo(map);
    })
  })

  return (
    <div className={props.className}>
      <div id="map" ref={ref} className={$s.MapContainer}/>
    </div>
  )
}


export default Map;

