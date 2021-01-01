import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";

import $s from "./Request.scss";
import TypeNSearch from "../TypeNSearch";
import {setLocations} from "./actions";

const Request = (props) => {
  const dispatch = useDispatch();
  const pickup = useRef();
  const dest = useRef();

  const calculateRoute = e => {
    e.preventDefault();
    dispatch(setLocations(pickup.current, dest.current));
  }

  return (
    <div className={props.className}>
      <p className={$s.ReqPickupTitle}>Deliver your parcel now</p>
      <form className={$s.RequestPickupForm}
        onSubmit={calculateRoute}
      >
          <TypeNSearch 
            valueRef={pickup}
            className={$s.SearchBox} 
            whatToType="Enter pickup location"/>
          <TypeNSearch 
            valueRef={dest}
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