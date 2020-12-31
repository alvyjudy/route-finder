import React, {useState, useRef} from "react";

import $s from "./Request.scss";
import TypeNSearch from "../TypeNSearch";
import getCoordinates from "./getCoordinates";

const Request = (props) => {
  const pickupAddr = useRef();
  const destAddr = useRef();

  const calculateRoute = e => {
    e.preventDefault();
    props.setPreviewReady(false);
    Promise.all([
      getCoordinates(pickupAddr).then(res=>{props.pickup.current=res}),
      getCoordinates(destAddr).then(res=>{props.dest.current=res})
    ]).then(()=>{
      props.setPreviewReady(true);
    })
    // Promise.resolve().then(()=>{
    //   props.pickup.current = [41.816, -79.125]
    //   props.dest.current = [43.703, -79.632]
    //   props.setPreviewReady(true);
    // })
  }

  return (
    <div className={props.className}>
      <p className={$s.ReqPickupTitle}>Deliver your parcel now</p>
      <form className={$s.RequestPickupForm}
        onSubmit={calculateRoute}
      >
          <TypeNSearch 
            valueRef={pickupAddr}
            className={$s.SearchBox} 
            whatToType="Enter pickup location"/>
          <TypeNSearch 
            valueRef={destAddr}
            className={$s.SearchBox} 
            whatToType="Enter destination"/>
          <TypeNSearch 
            className={$s.SearchBox} 
            whatToType="Enter destination"/>
          <button type="submit" className={$s.RequestButton}
          >Request</button>
      </form>
    </div>
  )
}

export default Request;