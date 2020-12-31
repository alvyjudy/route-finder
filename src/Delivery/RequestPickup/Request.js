import React, {useState, useRef} from "react";

import $s from "./Request.scss";
import TypeNSearch from "../TypeNSearch";

const Request = (props) => {

  const calculateRoute = e => {
    e.preventDefault();
    props.setPreviewReady(false);
    Promise.resolve().then(()=>{
      props.pickup.current = [41.816, -79.125]
      props.dest.current = [43.703, -79.632]
      props.setPreviewReady(true);
    })
  }

  return (
    <div className={props.className}>
      <p className={$s.ReqPickupTitle}>Deliver your parcel now</p>
      <form className={$s.RequestPickupForm}
        onSubmit={calculateRoute}
      >
          <TypeNSearch 
            valueRef={props.pickup}
            className={$s.SearchBox} 
            whatToType="Enter pickup location"/>
          <TypeNSearch 
            valueRef={props.dest}
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