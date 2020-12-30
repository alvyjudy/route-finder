import React, {useState} from "react";

import $s from "./Request.scss";
import TypeNSearch from "../TypeNSearch";

const Request = (props) => {
  const [pickup, setPickup] = useState("");
  const [dest, setDest] = useState("");

  const calculateRoute = e => {
    e.preventDefault();
  }
  return (
    <div className={props.className}>
      <p className={$s.ReqPickupTitle}>Deliver your parcel now</p>
      <form className={$s.RequestPickupForm}
        onSubmit={calculateRoute}
      >
          <TypeNSearch 
            typewriter={[pickup, setPickup]}
            className={$s.SearchBox} 
            whatToType="Enter pickup location"/>
          <TypeNSearch 
            typewriter={[dest, setDest]}
            className={$s.SearchBox} 
            whatToType="Enter destination"/>
          <button type="submit" className={$s.RequestButton}>Request now</button>
      </form>
    </div>
  )
}

export default Request;